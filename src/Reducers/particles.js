import Particle from "../Services/particle"
import GravitationalForce from "../Services/gravity"
import DrawCanvas from "../Services/canvas"

function addParticleR(particles, action){

    var mass = parseInt(action.mass);
    var positionX = parseInt(action.positionX);
    var positionY = parseInt(action.positionY);

    var particle = new Particle(mass, positionX, positionY, action.color)    
    
    return [...particles, particle ];
}

function updateParticles(particles,action){
    return GravitationalForce(particles,action.gravity/100,action.minMagnitude,action.maxMagnitude);
}

const particlesDispatcher = {
    ADD_PARTICLE: addParticleR,
    UPDATE_PARTICLES: updateParticles,
    DRAW_CANVAS: DrawCanvas,
}

export default function particlesReducer(particles = [],action){

    var handler = particlesDispatcher[action.type];
    if (handler !== undefined){
        return handler(particles, action);
    }
    return particles;
}