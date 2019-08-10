import axios from 'axios'
import { endPoints } from '../API'
import { CastCollection } from '../Models'


class CastController {
    collection;

    async getShowList() {
        try {
            console.log("before request")
            res = await axios.request(endPoints.getShowList) // to be dynamic
            console.log("after request")
            if (res) {
                this.collection = new CastCollection(res);
            }
            return this.collection;
        } catch (error) {
            console.error(error);
        }
    }
}

export const CastController = new CastController();
