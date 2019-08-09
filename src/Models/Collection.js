

/*
 * this model gives array of objects for different collections
 * eg. { Shows, Epsoides, Cast, .. etc }
 * It renders set of objects together into in array.
 */


import { Show } from './Show'
import { Episodes } from './Episodes'

export class Collection {

    list = [];
    searchList = [];

    constructor(response) {
        this.parseList(response);
    }

    parseList(response) {
        const { id } = response.config.params
        switch (id) {
            case 'tv_shows_complete_list': {
                console.log("inside show parse =>", id)
                return this.list = response.data.map(item => new Show(item));
            }
            case 'tv_shows_search_list': {
                console.log("inside search parse =>", id)
                return this.searchList = response.data.map(item => new Show(item));
            }
            case "tv_eposides_complete_list": {
                console.log("inside Episodes parse =>", id)
                return this.list = response.data.map(item => new Episodes(item));
            }
            default:
                return null
        }
    }
}

