import React, { Component } from 'react'
import { View, ScrollView, Button } from 'react-native'
import { Images } from '../../Assets'
import { HorizontalList, HeaderTitle, HeaderButton } from '../../Components'
import { loadShows } from '../../Store/Actions'
import { connect } from 'react-redux'

class Home extends Component {
    static navigationOptions = ({ navigation }) => {
		return {
            headerTitle: <HeaderTitle headerTitle={'HOME'} />,
            //headerLeft: <HeaderButton image={Images.backArrow} onClick={() => navigation.pop()} />,
            headerRight: <HeaderButton image={Images.menu} onClick={() => navigation.openDrawer()} />,
		};
    };
    
    componentDidMount() {
        this.props.loadShows()
    }

    render() {
        const { list, loading, navigation } = this.props
        if (loading === false) {
            return (
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <HorizontalList
                            list={list}
                            title={"Picked for you"}
                            onPress={(item) => navigation.navigate("ShowStack", { id: item.id })}
                        />
                        <Button title={"show list"} onPress={() => navigation.navigate("ShowList")} />
                    </View>
                </ScrollView>
            )
        }
        else {
            return null;
        }
    }
}


const mapStateToProps = state => {
    return {
        list: state.showsReducer.list,
        loading: state.showsReducer.loading,
    }
}

const mapDispatchToProps = dispatch => ({
    loadShows: () => dispatch(loadShows())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);


// Upcoming Season Premieres
// Popular shows airing tonight
// Schedule for Aug 06
// filtered search
