
import { collectionController } from '../../Controllers/CollectionController'


export const loadShows = () => {
    return function (dispatch) {
        collectionController.getShowList().then(collection => {
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
            type: "LOADING"
        })
        collectionController.searchShows(searchTerm).then(collection => {
            console.log("collection in then is ==>", collection)
            dispatch({
                type: 'SEARCH_SHOWS',
                payload: collection.searchList
            })
            if (searchTerm !== '' && collection.searchList === []) {
                dispatch({
                    type: "NO_RESULT",
                })
            }
        }).catch(e => console.log('Error of loading Shows Search==>', e))
    }
}


