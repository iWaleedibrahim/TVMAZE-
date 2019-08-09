
export class Episodes {

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
            this.parseEpObject(data);
        }
    }

    parseEpObject(episodesObject) {
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
