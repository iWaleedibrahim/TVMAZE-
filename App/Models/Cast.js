export class Cast {
    id;
    name;
    countryName;
    birthday;
    deathday;
    gender;
    image;
    characterName;

    constructor(data) {
        if (data) {
            this.parse(data);
        }
    }

    parse(castObject) {
        this.id = castObject.person.id;
        this.name = castObject.person.name;
        this.countryName = castObject.person.country.name;
        this.birthday = castObject.person.birthday;
        this.deathday = castObject.person.deathday;
        this.gender = castObject.person.gender;
        this.image = castObject.person.image.medium;
        this.characterName = castObject.character.name;
    }
}
