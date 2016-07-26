import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {STATES} from 'strings'

export default class TimeCards extends Component {
    constructor(props){
        super(props)

        this.state = {
            dialogIsOpen: false,
        }

        this.handleDocumentClick = this.handleDocumentClick.bind(this)
        
    }

    handleDocumentClick(e){
        if(this.state.dialogIsOpen && !this.refs.wrapper.contains(e.target)){
            this.setState({dialogIsOpen : false})
        }
    }

    componentWillMount() {
        document.addEventListener('click', this.handleDocumentClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick, false);
    }

    render(){
        
        return (
            <div >
            
            </div>
        )
    }
}