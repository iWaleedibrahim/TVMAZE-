
import axios from 'axios'
import { Collection } from '../Models/Collection'

class CollectionController {

    async getShowList() {
        try {
            res = await
                axios.get('http://api.tvmaze.com/shows', { params: { id: 'tv_shows_complete_list' } }) // to be dynamic
            if (res) {
                this.collection = new Collection(res);
            }
            // controller - view part
            return this.collection;
        } catch (error) {
            console.error(error);
        }
    }

    async searchShows(searchTerm) {
        try {
            res = await
                axios.get('http://api.tvmaze.com/search/shows?q=' + searchTerm, { params: { id: 'tv_shows_search_list' } })
            if (res) {
                this.showSearchCollection = new Collection(res);
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

    async getEpisodesList() {
        try {
            res = await axios.get('http://api.tvmaze.com/seasons/90/episodes', { params: { id: 'tv_eposides_complete_list' } })
            if (res) {
                this.collection = new Collection(res);
            }
            return this.collection
        } catch (error) {
            console.error("error getting epsoides ==>", error)
        }
    }
}

export const collectionController = new CollectionController();
