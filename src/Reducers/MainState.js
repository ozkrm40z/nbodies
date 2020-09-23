import { combineReducers } from 'redux'
import particlesReducer from './particles'
import settingsReducer from './settings'

const State = combineReducers({
    particlesReducer,
    settingsReducer
})

export default State;