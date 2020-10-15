
var initialSettings = {
    canvas: {
        width: 600,
        height: 600,
    },
    particle: {
        minSize: 1,
        maxSize: 10,
        minMass: 1,
        MaxMass: 10,
        defaultmass: 3,
        defaultPositionX: 150,
        defaultPositionY: 150,
        defaultColor: "yellow", 
    },
    gravity: {
        current : 1,
        min: 1,
        max: 10,
        step: 1,
    },
    timeinterval: {
        current: 100,
        min: 20,
        max: 200,
        step: 20
    },
    magnitude:{
        min: 0.5,
        max: 25.0,
    },
    isStarted: false,
    availableColors: [
        {
            value:"blue",
            label:"blue",
        },
        {
            value:"red",
            label:"red",
        },
        {
            value:"yellow",
            label:"yellow",
        },
        {
            value:"green",
            label:"green",
        },
        {
            value:"white",
            label:"white",
        },
        {
            value:"purple",
            label:"purple",
        },
        {
            value:"orange",
            label:"orange",
        }
    ]
}

function updateGravity(settings,action){
    settings.gravity.current = action.value;
    return settings;
}

function updateTimeInterval(settings,action){
    settings.timeinterval.current = action.value;
    return settings;
}

function updateMagnitude(settings,action){
    return settings;
}

function start(settings,action){
    settings.isStarted = !settings.isStarted;
    return settings;
}

function stop(settings,action){
    settings.isStarted = false;
    return settings;
}

const settinsDispatcher = {
    UPDATE_GRAVITY:updateGravity,
    UPDATE_TIME_INTERVAL: updateTimeInterval,
    UPDATE_MAGNITUDE: updateMagnitude,
    START_VISUALIZATION: start,
    STOP_VISUALIZATION: stop,
}

export default function settingsReducer(settings = initialSettings,action){
    var handler = settinsDispatcher[action.type];
    if (handler !== undefined){
        return handler(settings, action);
    }
    return settings;    
}