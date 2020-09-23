export const ADD_PARTICLE =         'ADD_PARTICLE'
export const UPDATE_GRAVITY =       'UPDATE_GRAVITY'
export const UPDATE_TIME_INTERVAL = 'UPDATE_TIME_INTERVAL'
export const TOGGLE_SIDEBAR =       'UPDATE_SIDEBAR_VISIBILITY'
export const UPDATE_MAGNITUDE =     'UPDATE_MAGNITUDE'
export const UPDATE_PARTICLES =     'UPDATE_PARTICLES'
export const START_VISUALIZATION =  'START_VISUALIZATION'
export const STOP_VISUALIZATION =   'STOP_VISUALIZATION'
export const DRAW_CANVAS =          'DRAW_CANVAS'

export function start(){
    return {
        type: START_VISUALIZATION
    }
}

export function stop(){
    return {
        type: STOP_VISUALIZATION
    }
}

export function addParticle(mass, positionX, positionY,color){
    return {
        type: ADD_PARTICLE,
        mass: mass,
        positionX: positionX,
        positionY: positionY,
        color: color,
    }
}

export function updateParticles(gravity, minMagnitude, maxMagnitude){
    return {
        type: UPDATE_PARTICLES,
        gravity: gravity,
        minMagnitude: minMagnitude,
        maxMagnitude: maxMagnitude,
    }
}

export function drawCanvas(ctx,particle){
    return {
        type: DRAW_CANVAS,
        ctx: ctx,
        particle: particle,
    }
}

export function updateMagnitude(magnitude){
    return {
        type: UPDATE_MAGNITUDE,
        value: magnitude
    }
}

export function updateGravity(gravity){
    return {
        type: UPDATE_GRAVITY,
        value: gravity
    }
}

export function updateTimeInterval(interval){
    return {
        type: UPDATE_TIME_INTERVAL,
        value: interval
    }
}

export function toogleSidebar(isVisible){
    return {
        type: TOGGLE_SIDEBAR,
        value: isVisible
    }
}