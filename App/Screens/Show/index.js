import React, { Component } from 'react'
import { Images } from '../../Assets'
import { HeaderTitle, HeaderButton, HorizontalList } from '../../Components'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { removeTags } from '../../Utils/Helpers/removeTags'
import { styles } from './styles'





export default class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false,
            data: {
                "id": 6,
                "url": "http://www.tvmaze.com/shows/6/the-100",
                "type": "Scripted",
                "language": "English",
                "genres": [
                    "Action",
                    "Adventure",
                    "Science-Fiction"
                ],
                "status": "Running",
                "runtime": 60,
                "premiered": "2014-03-19",
                "officialSite": "http://www.cwtv.com/shows/the-100/",
                "schedule": {
                    "time": "21:00",
                    "days": [
                        "Tuesday"
                    ]
                },
                "rating": {
                    "average": 7.9
                },
                "weight": 100,
                "network": {
                    "id": 5,
                    "name": "The CW",
                    "country": {
                        "name": "United States",
                        "code": "US",
                        "timezone": "America/New_York"
                    }
                },
                "webChannel": null,
                "externals": {
                    "tvrage": 34770,
                    "thetvdb": 268592,
                    "imdb": "tt2661044"
                },
                "summary": "<p>Ninety-seven years ago, nuclear Armageddon decimated planet Earth, destroying civilization. The only survivors were the 400 inhabitants of 12 international space stations that were in orbit at the time. Three generations have been born in space, the survivors now number 4,000, and resources are running out on their dying \"Ark\" - the 12 stations now linked together and repurposed to keep the survivors alive. Draconian measures including capital punishment and population control are the order of the day, as the leaders of the Ark take ruthless steps to ensure their future, including secretly exiling a group of 100 juvenile prisoners to the Earth's surface to test whether it's habitable.</p>",
                "updated": 1565284296,
                "links": {
                    "self": {
                        "href": "http://api.tvmaze.com/shows/6"
                    },
                    "previousepisode": {
                        "href": "http://api.tvmaze.com/episodes/1664980"
                    }
                },
                "name": "The 100",
                "image": "http://static.tvmaze.com/uploads/images/medium_portrait/189/474423.jpg"
            }
        }
    }

    static navigationOptions = ({ navigation }) => {

        return {
            headerTitle: <HeaderTitle headerTextColor={'#ddd'} headerTitle={'Show Title'} />,
            headerLeft: <HeaderButton image={Images.backArrow} onClick={() => navigation.pop()} />, //heart
            headerRight: <HeaderButton image={Images.heart} onClick={() => navigation.openDrawer()} />, // back
            headerStyle: {
                backgroundColor: '#0D0D0D',
            },
        };
    };

    strCut = (str) => {
        const shownStr = str.substring(0, 150)
        const hiddenStr = str.substring(150, str.length)
        const strObj = { hidden: hiddenStr, shown: shownStr }
        return strObj;
    }

    render() {
        const { data, showMore } = this.state
        const { id, name, image, summary, runtime, schedule, rating } = data
        return (
            <View style={styles.container}>
                <View style={styles.upperScreenHalf}>
                    <Image source={{ uri: image }} style={styles.upperHalfImage} />
                    <View style={styles.textStack}>
                        <Text style={styles.textTitle}>{"Title:"}</Text>
                        <Text style={styles.textData}> {name}</Text>
                        <Text style={styles.textTitle}> {"Running Time:"}</Text>
                        <Text style={styles.textData}> {runtime}</Text>
                        <Text style={styles.textTitle}> {"Air Time:"}</Text>
                        <Text style={styles.textData}> {schedule.days} on {schedule.time}</Text>
                        <Text style={styles.textTitle}> {"schedule:"}</Text>
                        <Text style={styles.textData}> </Text>
                        <Text>{""}</Text>
                    </View>
                    <View>
                    </View>
                </View>
                <View style={styles.lowerScreenHalf}>
                    <Text style={styles.summaryTitle}>{"STORYLINE"}</Text>
                    <View style={styles.summaryBlock}>

                        <Text style={styles.summary}>

                            {this.strCut(removeTags(summary)).shown}
                            <Text>{this.state.showMore ? this.strCut(removeTags(summary)).hidden : ''} </Text>
                            <Text
                                style={{ color: '#0000DD' }}
                                onPress={() => this.setState({ showMore: !showMore })}
                            >
                                {this.state.showMore ? "ShowLess.." : "ShowMore.."}</Text>
                        </Text>
                    </View>
                    <HorizontalList
                        title="Cast & Crew"
                        list={[this.state.data]}
                        onPress={() => console.log(data.name)}
                    />
                    <View>
                    </View>
                </View >
            </View >
        )
    }
}
