
export default function DrawCanvas(particles,action){
    action.ctx.fillStyle ="black"
    action.ctx.fillRect(0, 0, 1000, 600)
    particles.forEach(particle => drawParticle(action.ctx, particle))
    return particles
}

function drawParticle(ctx,particle){
    ctx.beginPath()
    ctx.arc(particle.PositionX,particle.PositionY, particle.Mass, 0, 2 * Math.PI);
    ctx.fillStyle = particle.Color;
    ctx.fill()
    ctx.stroke()    
}
