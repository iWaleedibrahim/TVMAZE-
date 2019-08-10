

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './Reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(initialState = {}) {
    const store = createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk)))
    return store;
}