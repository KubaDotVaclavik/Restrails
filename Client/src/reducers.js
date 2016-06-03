import { combineReducers } from 'redux'
import {
    REQUEST_POSTS, 
    RECEIVE_POSTS, 
    SELECT_SUBREDDIT,
    INVALIDATE_SUBREDDIT
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

const rootReducer = combineReducers({
    postsBySubreddit,
    selectedSubreddit
})

export default rootReducer 