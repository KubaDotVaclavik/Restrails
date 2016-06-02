import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducers'
import App from './components/App'

const rootEl = document.getElementById('app-root');
let store = createStore(todoApp)

render(
  <Provider store={store}>
  <App/>
  </Provider>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default; // eslint-disable-line
    render(  
      <Provider store={store}>
        <NextApp/>
      </Provider>,
      rootEl
  );
  });
}
