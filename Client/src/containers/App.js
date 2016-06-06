import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { selectSubreddit, fetchPostsIfNeeded, invalidateSubreddit } from '../actions'
import AppRoot from "AppRoot"

import 'appLess'

class App extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }
    
    componentDidMount(){
        const {dispatch, selectedSubreddit} = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.selectedSubreddit !== this.props.selectedSubreddit){
            const {dispatch, selectedSubreddit} = nextProps
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }
    }
    
    handleChange(nextSubreddit){
        this.props.dispatch(selectSubreddit(nextSubreddit))
    }
    
    handleRefreshClick(e){
        e.preventDefault()
        
        const {dispatch, selectedSubreddit} = this.props
        dispatch(invalidateSubreddit(selectedSubreddit))
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
    
    render(){
        const {selectedSubreddit, posts, isFetching, lastUpdate} = this.props

        return (
            <div id="app" >
            <AppRoot/>
            </div>
        )
    }
}

App.propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdate: PropTypes.number,
    dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state){
    const {selectedSubreddit, postsBySubreddit} = state
    const {isFetching, lastUpdate, items: posts} = 
        postsBySubreddit[selectedSubreddit] || {isFetching: true, items: []}
        
    return { selectedSubreddit, posts, isFetching, lastUpdate}
}

export default connect(mapStateToProps)(App)