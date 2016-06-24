import { combineReducers } from 'redux'

import {ADD, MOVE_START, MOVE_END, REMOVE} from './actionTypes'
 
const timeCard = (state, action) => {
    const p = action.payload
    
    switch(action.type){
        case ADD:
            return {
                id: p.id,
                startTime: p.startTime || null,
                endTime: p.endTime || null,
            }
        case MOVE_START:
            if(state.id !== p.id) return state;
            return Object.assign({}, state, {
                startTime: p.time
            })
        case MOVE_END:
            if(state.id !== p.id) return state;
            return Object.assign({}, state, {
                endTime: p.time
            })
        default:
            return state
    }
}

const timeCards = (state = [], action) => {
    switch(action.type){
        case ADD:
            return [
                ...state,
                timeCard(undefined, action)
            ];
        case MOVE_START:
        case MOVE_END:
            return state.map(t => timeCard(t, action))        
        case REMOVE:
            return state.filter(t => {t.id !== p.id})
        default:
            return state;
    }
}


export default timeCards 