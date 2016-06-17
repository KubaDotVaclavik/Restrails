import 'babel-polyfill'

import React from 'react'
import {render} from 'react-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux'
import configureStore from './configureStore' 
import App from './containers/App'

import {
    addItem, 
    addTag
} from './actions'

debugger;
 const store = configureStore({
     entities: {
         items: [],
         tags: []
     }
 })
store.dispatch(addItem({name: 'testname', value: 6}))


// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
// injectTapEventPlugin();

// const store = configureStore()
// const appRoot = document.getElementById('app-root')

/*
render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <App />
    </MuiThemeProvider>
  </Provider>,
  appRoot
)

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        let NewApp = require('./containers/App').default; // eslint-disable-line
        render(
            <Provider store={store}>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <NewApp />
                </MuiThemeProvider>
            </Provider>,
            appRoot
        )
    });
}
*/