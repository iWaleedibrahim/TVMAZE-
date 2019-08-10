import {
    BASE_URL
} from './constants'

export default {
    "getShowList": {
        baseURL: BASE_URL,
        url: "/shows",
        method: 'get', // default,
        params: { q: '' },
    },
    "searchShows": {
        baseURL: BASE_URL,
        url: "/search/shows",
        method: 'get', // default,
        params: { q: '' },
    },
}