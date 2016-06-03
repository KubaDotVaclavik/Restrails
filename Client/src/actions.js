import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POST'
export const RECEIVE_POSTS = 'RECEIVE_POST'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export function selectSubreddit(subreddit) {
    return {
        type: SELECT_SUBREDDIT,
        payload: {
            subreddit
        }
    }
}

export function invalidateSubreddit(subreddit) {
    return {
        type: INVALIDATE_SUBREDDIT,
        payload: {
            subreddit
        }
    }
}

export function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        payload:{
            subreddit
        }
    }
}

export function receiveSubreddit(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        payload: {
            subreddit,
            posts: json.data.children.map(child => child.data),
            receivedAt: Date.now()
        }
    }
}

export function fetchSubreddit(subreddit) {
    return dispatch => {
        dispatch(requestPosts(subreddit))
        return fetch(`http://www.reddit.com/r/${subreddit}.json`)
        .then(response => response.json())
        .then(json => dispatch(receiveSubreddit(subreddit, json)))
    }
}

function shouldFetchPosts(state, subreddit){
    const posts = state.postsBySubreddit[subreddit]
    if(!posts){
        return true
    }else if(posts.isFetching){
        return false
    }else{
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded(subreddit){
    return (dispatch, getState) => {
        if(shouldFetchPosts(getState(), subreddit)) {
            return dispatch(fetchSubreddit(subreddit))
        }
    }
}