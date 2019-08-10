export class Episode {
    id;
    url;
    name;
    season;
    number;
    airdate;
    airtime;
    airstamp;
    runtime;
    image;
    summary;

    constructor(data) {
        if (data) {
            this.parse(data);
        }
    }

    parse(episodesObject) {
        this.id = episodesObject.id;
        this.image = episodesObject.image.medium;
        this.url = episodesObject.url;
        this.name = episodesObject.name;
        this.season = episodesObject.season;
        this.number = episodesObject.number;
        this.airdate = episodesObject.airdate;
        this.airtime = episodesObject.airtime;
        this.airstamp = episodesObject.airstamp;
        this.runtime = episodesObject.runtime;
        this.summary = episodesObject.summary;
    }
}



export class EpisodeCollection {
    list = [];

    constructor(response) {
        this.parse(response);
    }

    parse(response) {
        const data = response.data
        const len = data.length
        this.list = Array(len)
        for(let i = 0; i < len;i++){
            this.list[i] = new Episode(data[i])
        }
    }
}