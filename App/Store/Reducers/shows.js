import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	LOGIN_USER_SUCCESS,
	LOGIN_USER_FAIL,
	LOGIN_USER
} from '../Actions/types'


const INITIAL_STATE = { 
	loading: true,
	noResult: false,
	searchList: []
}


export const showsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'LOAD_SHOWS':
			return {
				list: action.payload,
				loading: false
			}
		case 'LOADING':
			return {
				loading: true
			}
		case 'SEARCH_SHOWS':
			return {
				searchList: action.payload,
				loading: false
			}
		case 'NO_RESULT':
			return {
				loading: false,
				noResult: true
			}
		default:
			return { ...state } // get that from asyncStorage 
	};
};
