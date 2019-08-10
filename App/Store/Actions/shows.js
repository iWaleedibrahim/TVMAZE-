import { showController } from '../../Controllers'

export const loadShows = () => {
    return function (dispatch) {
        showController.getShowList().then(collection => {
            dispatch({
                type: 'LOAD_SHOWS',
                payload: collection.list
            })
        }).catch(e => console.log('Error of loadingShows==>', e))
    }
}

export const searchShow = (searchTerm) => {
    return function (dispatch) {
        dispatch({
            type: 'LOADING'
        })
        showController.searchShows(searchTerm).then(collection => {
            console.log("collection in then is ==>", collection)
            if (searchTerm !== '' && collection.searchList === []) {
                dispatch({
                    type: 'NO_RESULT',
                })
            } else {
                dispatch({
                    type: 'SEARCH_SHOWS',
                    payload: collection.searchList
                })
            }
        }).catch(e => console.log('Error of loading Shows Search==>', e))
    }
}