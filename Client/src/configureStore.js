import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'
import {timeTick} from './actions'

const loggerMiddleware = createLogger()

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
    
    // TODO modularize
    setInterval(() => store.dispatch(timeTick()), 200000)
    
    return store
}