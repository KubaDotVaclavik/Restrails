import muiThemeable from 'material-ui/styles/muiThemeable'
import React, {Component, PropTypes} from 'react'
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

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
        const containerHeight = `calc(100% - ${64}px )`
        const viewsHeight = `calc(100% - ${112}px )`
        
        return (
            <div style={{height: "100%"}}>
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
            {
                contents.map((item, idx) =>{
                    return <Tab label={item.title} value={idx} key={idx}/>
                })
            }
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
                <div key={0}>
                    <h1>aaaaa</h1>
                    <h1>aaaaa</h1>
                    <h1>aaaaa</h1>
                    <h1>aaaaa</h1>
                    <h1>aaaaa</h1>
                    <h1>aaaaa</h1>
                    <h1>aaaaa</h1>
                    <h1>aaaaa</h1>
                    <h1>aaaaa</h1>
                    <h1>aaaaa</h1>
                    <h1>aaaaa</h1>
                    <h1>aaaaa</h1>
                    <h1>aaaaa</h1>
                    <h1>aaaaa</h1>
                    <h1>aaaaa</h1>
                    <h1>aaaaa</h1>
                    <h1>aaaaa</h1>
                    <h1>aaaaa</h1>
                </div>
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
