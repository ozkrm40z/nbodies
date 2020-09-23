
class Particle{
    constructor(mass,posx,posy,color){
        this.Mass           = mass
        this._PositionX      = posx
        this._PositionY      = posy
        this.VelocityX      = 0
        this.VelocityY      = 0
        this.AccelarationX  = 0
        this.AccelarationY  = 0
        this.Color          = color
    }

    get PositionX(){
        return this._PositionX
    }

    set PositionX(position){
        this._PositionX = position
    }

    get PositionY(){
        return this._PositionY
    }

    set PositionY(position){
        this._PositionY = position
    }

    Attraction(particle, gravity, minMagnitude, maxMagnitude){

        var diferencex = particle.PositionX - this.PositionX;
        var diferencey = particle.PositionY - this.PositionY;
        var force = {
            x : diferencex,
            y : diferencey,
        }
        
        var magnitude = getMagnitude(force.x, force.y, minMagnitude, maxMagnitude );
        var strength = (gravity* particle.Mass* this.Mass )/ Math.pow(magnitude,2)
        force.x = force.x * strength;
        force.y = force.y * strength;
        return force;
    }

    Move(){
        this.VelocityX += this.AccelarationX;
        this.VelocityY += this.AccelarationY;
        this.PositionX += this.VelocityX;
        this.PositionY += this.VelocityY;
        this.AccelarationX = 0;
        this.AccelarationY = 0;
    }

    Accelerate(force){
        this.AccelarationX += force.x/this.Mass;
        this.AccelarationY += force.y/this.Mass;
    }
}

function addParticleR(particles, action){
    var particle = new Particle(action.mass, action.positionX, action.positionY, action.color)    
    
    return [...particles, particle ];
}

function updateParticles(particles,action){
    return GravitationalForce(particles,action.gravity/100,action.minMagnitude,action.maxMagnitude);
}

function drawParticle(ctx,particle){
    ctx.beginPath()
    ctx.arc(particle.PositionX,particle.PositionY, particle.Mass, 0, 2 * Math.PI);
    ctx.fillStyle = particle.Color;
    ctx.fill()
    ctx.stroke()    
}

function drawCanvas(particles,action){
    action.ctx.fillStyle ="black"
    action.ctx.fillRect(0, 0, 1000, 600)
    particles.forEach(particle => drawParticle(action.ctx, particle))
    return particles
}

const particlesDispatcher = {
    ADD_PARTICLE: addParticleR,
    UPDATE_PARTICLES: updateParticles,
    DRAW_CANVAS: drawCanvas,
}

export default function particlesReducer(particles = [],action){

    var handler = particlesDispatcher[action.type];
    if (handler !== undefined){
        return handler(particles, action);
    }
    return particles;
}


function GravitationalForce(particles,gravity, minMagnitude, maxMagnitude){
	for(var i=0;i<particles.length;i++){
		for(var j=0;j<particles.length;j++){
			if(i===j){
                continue;
            }
            var force = particles[i].Attraction(particles[j],gravity, minMagnitude, maxMagnitude);
            particles[i].Accelerate(force)
        }
        
        particles[i].Move()
    }
    
    return particles;
}

function getMagnitude(x, y, minMagnitude, maxMagnitude){
    var mag = Math.sqrt(x*x + y*y);
    if (mag > maxMagnitude){
        return maxMagnitude;
    }

    if (mag < minMagnitude){
        return minMagnitude;
    }

    return mag;
}