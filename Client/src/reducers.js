import { combineReducers } from 'redux'
import {
    ADD_ITEM, 
    ADD_TAG
} from './actions'

function selectedSubreddit(state = 'reactjs', action){
    switch(action.type){
        case SELECT_SUBREDDIT:
            return action.payload.subreddit;
        default:
            return state;
    }
}

function posts(state = {isFetching: false, didInvalidate: false, items: []}, action){
    switch(action.type){
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.payload.posts,
                lastUpdate: action.payload.receivedAt,
            })        
        default:
            return state;
    }
}

function postsBySubreddit(state = {}, action) {
    switch(action.type){
        case REQUEST_POSTS:
        case RECEIVE_POSTS:
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                [action.payload.subreddit] : posts(state[action.payload.subreddit], action)
            })
        default:
            return state
    }
}

// const rootReducer2 = combineReducers({
//     entities,
//     selectedSubreddit
// })
function entities(state = {}, action){
    switch(action.type){
        case ADD_ITEM:
        case ADD_TAG:
            return Object.assign({}, state, {
                entities: entities(state.entities, action)
            })
        default:
            return state;
    }
}

const rootReducer = function(state = {}, action){
    switch(action.type){
        case ADD_ITEM:
        case ADD_TAG:
            return Object.assign({}, state, {
                entities: entities(state.entities, action)
            })
        default:
            return state;
    }
}

export default rootReducer 