

state = { loading: true, noResult: false } // intial state


export const showsReducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_SHOWS':
            return {
                list: action.payload,
                loading: false
            }
        case "LOADING":
            return {
                loading: true
            }
        case "SEARCH_SHOWS":
            return {
                searchList: action.payload,
                loading: false
            }
        case "NO_RESULT":
            return {
                loading: false,
                noResult: true
            }
        default:
            return { ...state } // get that from asyncStorage 
    };
};
