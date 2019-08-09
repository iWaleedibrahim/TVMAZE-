

class Seasons {

    id;
    url;
    number;
    name;
    episodeOrder;
    premiereDate;
    endDate;
    networkName;
    webChannel;
    image;
    summary;
    _links;

    constructor(data) {
        if (data) {
            this.parseShowObject(data);
        }
    }

    parseShowObject(seasonObject) {
        this.id = seasonObject.id;
        this.url = seasonObject.url;
        this.number = seasonObject.number;
        this.name = seasonObject.name;
        this.episodeOrder = seasonObject.episodeOrder;
        this.premiereDate = seasonObject.premiereDate;
        this.endDate = seasonObject.endDate;
        this.networkName = seasonObject.network.name;
        this.webChannel = seasonObject.webChannel;
        this.image = seasonObject.image.medium;
        this.summary = seasonObject.summary;
        this._links = seasonObject._links;
    }
}







