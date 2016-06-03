import 'babel-polyfill'

import React from 'react'
import {render} from 'react-dom'
// import Root from './containers/Root'
import {Provider} from 'react-redux'
import configureStore from './configureStore' 
import AsyncApp from './containers/AsyncApp'

const store = configureStore()
const appRoot = document.getElementById('app-root')

render(
  <Provider store={store}>
    <AsyncApp/>
  </Provider>,
  appRoot
)

if (module.hot) {
    module.hot.accept('./containers/AsyncApp', () => {
        let NewApp = require('./containers/AsyncApp').default; // eslint-disable-line
        render(
            <Provider store={store}>
                <NewApp/>
            </Provider>,
            appRoot
        )
    });
}
