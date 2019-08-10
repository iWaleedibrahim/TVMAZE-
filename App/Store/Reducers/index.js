
import { combineReducers } from 'redux'
import { showsReducer } from './shows'
import AuthReducer from './auth'

export default combineReducers({
    showsReducer,
    AuthReducer
});
