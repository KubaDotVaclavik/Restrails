import 'babel-polyfill'

import React from 'react'
import {render} from 'react-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux'
import configureStore from './configureStore' 
import AppRoot from "AppRoot"

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

const defaultData = {
    timeFrame: Date.now()
}

const store = configureStore(defaultData)
const appElement = document.getElementById('app-root')


render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <AppRoot />
    </MuiThemeProvider>
  </Provider>,
  appElement
)

if (module.hot) {
    module.hot.accept('./components/AppRoot', () => {
        console.log('new app')
        let NewApp = require('./components/AppRoot').default; // eslint-disable-line
        render(
            <Provider store={store}>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <NewApp />
                </MuiThemeProvider>
            </Provider>,
            appElement
        )
    });
}
