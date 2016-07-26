import muiThemeable from 'material-ui/styles/muiThemeable'
import React, {Component, PropTypes} from 'react'
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

import rootStyles from './css/rootStyles.css'
import 'appLess'

import {Timeline} from './Timeline/index'
import {AddBtn} from './AddBtn/index'

const styles = {
    appBar: {
        boxShadow: 'none'
    }
}

class AppRoot extends Component {    
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this) 
        this.state = {
            slideIndex: 0,
        };
    }
    
    handleChange(value){
        this.setState({
            slideIndex: value,
        });
    }
    
    render(){
        const contents = [
            {title: "Timeline", content : "timeline"},
            {title: "Summary", content: "summary"}
        ]
        const viewsHeight = `calc(100% - ${112}px )`
        
        return (
            <div className={`${rootStyles.root} ${rootStyles.reset}`}>
            <div style={{backgroundColor: this.props.muiTheme.palette.primary1Color}}>
            <AppBar
            className="app-bar"
            style={styles.appBar}
            title="Restrails"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            
            <Tabs 
            className="app-tabs"
            value={this.state.slideIndex} 
            onChange={this.handleChange}>
                <Tab label='Timeline' value={0}></Tab>
                <Tab label='Summary' value={1}></Tab>
            </Tabs>
            
            </div>
            <SwipeableViews
            style={{height: viewsHeight}}
            className="swipeable-views-container"
            index={this.state.slideIndex}
            onChangeIndex={this.handleChange} 
            containerStyle={{height: '100%'}}
            slideStyle={{}}
            >
                
                    <Timeline key={0}>
                        <AddBtn />
                    </Timeline>
                
                <div key={1}>
                    <h1>bbbbbb</h1>
                    <h1>bbbbbb</h1>
                    <h1>bbbbbb</h1>
                    <h1>bbbbbb</h1>
                    <h1>bbbbbb</h1>
                    <h1>bbbbbb</h1>
                </div>
            </SwipeableViews >
            </div>
        )
    }
}
export default muiThemeable()(AppRoot)

// Picker.propTypes = {
//     options: PropTypes.arrayOf(
//         PropTypes.string.isRequired
//     ).isRequired,
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired
// }
