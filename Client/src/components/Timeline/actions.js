import fetch from 'isomorphic-fetch'
import uid from 'uid-safe'

import {ADD, MOVE_START, MOVE_END, REMOVE} from './actionTypes'

export function add(startTime){
    const endTime = new Date(startTime)
    endTime.setHours(startTime.getHours() + 6)
    return {
        type: ADD,
        payload: {
            id: uid.sync(12),
            startTime,
            endTime
        }
    }
} 

export function moveStartTime(id, time){
    return {
        type: MOVE_START,
        payload: {id, time}
    }
}

export function moveEndTime(id, time){
    return {
        type: MOVE_END,
        payload: {id, time}
    }
}

export function remove(id){
    return {
        type: REMOVE,
        payload: {id}
    }
}
/*
export function fetchSubreddit(subreddit) {
    return dispatch => {
        dispatch(requestPosts(subreddit))
        return fetch(`http://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(receiveSubreddit(subreddit, json)))
    }
}
*/
