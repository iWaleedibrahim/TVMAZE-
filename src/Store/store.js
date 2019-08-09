

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(initialState = {}) {
    const store = createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk)))
    return store;
}














// compose: allows you to use different middlewares

/*
 * thunk: is an enhancer of type middleware
 * redux dev tools is an enhancer of another type, not middleware.
 *
 */

/*
 * __DEV__ is a global variable that only true if app in dev mode.
 */
