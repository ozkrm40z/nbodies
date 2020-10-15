
export default function GravitationalForce(particles,gravity, minMagnitude, maxMagnitude){
	for(var i=0;i<particles.length;i++){
		for(var j=0;j<particles.length;j++){
			if(i===j){
                continue;
            }
            var force = getAttraction(particles[i], particles[j],gravity, minMagnitude, maxMagnitude);
            particles[i].Accelerate(force)
        }
        
        particles[i].Move()
    }
    
    return particles;
}

function getAttraction(particleA,particleB, gravity, minMagnitude, maxMagnitude){

    var diferencex = particleB.PositionX - particleA.PositionX;
    var diferencey = particleB.PositionY - particleA.PositionY;
    var force = {
        x : diferencex,
        y : diferencey,
    }
    
    var magnitude = getMagnitude(force.x, force.y, minMagnitude, maxMagnitude );
    var strength = (gravity* particleB.Mass* this.Mass )/ Math.pow(magnitude,2)
    force.x = force.x * strength;
    force.y = force.y * strength;
    return force;
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