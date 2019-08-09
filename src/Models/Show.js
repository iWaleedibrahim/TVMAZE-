

export class Show {

    url;
    name;
    type;
    language;
    genres;
    Drama;
    Science_Fiction;
    Thriller;
    status;
    runtime;
    premiered;
    officialSite;
    schedule;
    time;
    days;
    Thursday;
    average;
    weight;
    network;
    id;
    name;
    country;
    name;
    code;
    timezone;
    webChannel;
    externals;
    tvrage;
    thetvdb;
    imdb;
    image;
    summary;
    updated;
    _links;
    self;
    href;
    previousepisode;
    href;
    rating;

    constructor(data) {
        if (data) {
            this.parseShowObject(data);
        }
    }

    parseShowObject(_showObject) {
        const showObject = _showObject.score ? _showObject.show : _showObject;

        this.id = showObject.id;  // string
        this.url = showObject.url; // string url
        this.type = showObject.type; // string
        this.language = showObject.language; // string
        this.genres = showObject.genres; // array 
        this.status = showObject.status; // string
        this.runtime = showObject.runtime;  // number
        this.premiered = showObject.premiered; // string date
        this.officialSite = showObject.officialSite; // string url
        this.schedule = showObject.schedule; // object
        this.rating = showObject.rating; // object
        this.weight = showObject.weight; // number 
        this.network = showObject.network; // object
        this.webChannel = showObject.webChannel; // object
        this.externals = showObject.externals; // object
        this.summary = showObject.summary; // string in html
        this.updated = showObject.updated; // number timestamp
        this._links = showObject._links; // object
        this.name =
            showObject.name === 'undefined' || null ?
                "No-Show" : showObject.name // string
        this.image =
            showObject.image.medium === 'undefined' || null ?
                require('../Assets/noimage.png')
                : showObject.image.medium // object
    }
}
