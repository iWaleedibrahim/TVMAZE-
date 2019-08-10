
import axios from 'axios'
import { EpisodeCollection } from '../Models'

class EpisodeController {
    collection;
    async getEpisodesList() {
        try {
            res = await axios.get('http://api.tvmaze.com/seasons/90/episodes', { params: { id: 'tv_eposides_complete_list' } })
            if (res) {
                this.collection = new EpisodeCollection(res);
            }
            return this.collection
        } catch (error) {
            console.error("error getting epsoides ==>", error)
        }
    }
}

export const episodeController = new EpisodeController();
