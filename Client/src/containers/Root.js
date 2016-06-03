import React, {Component} from 'react'
import {Provider} from 'react-redux'
import configureStore from '../configureStore' 
import AsyncApp from './AsyncApp'

const store = configureStore()
let App = AsyncApp

export default class Root extends Component {
    render(){
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

if (module.hot) {
    module.hot.accept('./AsyncApp', () => {
        App = require('./AsyncApp').default; // eslint-disable-line
        Root.forceUpdate()
    });
}