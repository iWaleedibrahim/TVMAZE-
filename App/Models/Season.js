export class Season {
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
    links;

    constructor(data) {
        if (data) {
            this.parse(data);
        }
    }

    parse(seasonObject) {
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
        this.links = seasonObject._links;
    }
}

export class SeasonCollection {
    list = [];

    constructor(response) {
        this.parse(response);
    }

    parse(response) {
        const data = response.data
        const len = data.length
        this.list = Array(len)
        for(let i = 0; i < len;i++){
            this.list[i] = new Season(data[i])
        }
    }
}