import { combineReducers } from 'redux'
import {reducer as timeCards} from './components/Timeline/index'

import {TIME_TICK} from './actions'

function timeFrame(state = 0, action){
    switch(action.type){
        case(TIME_TICK):
            return action.payload.now;
        default:
            return state;
    }
}

const entities = combineReducers({
    timeCards
})

const rootReducer = combineReducers({
    timeFrame,
    entities
})

export default rootReducer 