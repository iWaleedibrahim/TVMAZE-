import axios from 'axios'
import { ShowCollection } from '../Models'
import { endPoints } from '../API'

class ShowController {
    collection;
    showSearchCollection;

    async getShowList() {
        try {
            console.log("before request")
            res = await axios.request(endPoints.getShowList) // to be dynamic
            console.log("after request")
            if (res) {
                this.collection = new ShowCollection(res);
            }
            return this.collection;
        } catch (error) {
            console.error(error);
        }
    }

    async searchShows(searchTerm) {
        try {
            const request = { ...endPoints.getShowList, params: { q: searchTerm } }
            res = await axios.request(request)
            if (res) {
                this.showSearchCollection = new ShowCollection(res);
                console.log("parse Response ==>", this.showSearchCollection)
            }
            if (searchTerm = '') {
                this.getShowList()
            }
            return this.showSearchCollection;
        } catch (error) {
            throw error;
        }
    }
}

export const showController = new ShowController();
