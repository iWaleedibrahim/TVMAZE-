
import { combineReducers } from 'redux'
import { showsReducer } from './showsReducer'
import AuthReducer from './authReducer'

export default combineReducers({
    showsReducer,
    AuthReducer
});
