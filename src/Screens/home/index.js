import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import HorizontalList from '../../Components/HorizontalList'
import { loadShows } from '../../Store/actions/loadShows'
import { connect } from 'react-redux'

class Home extends Component {

    componentDidMount() {
        this.props.loadShows()
    }

    render() {
        const { list, loading } = this.props
        if (loading === false) {
            return (
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <HorizontalList
                            list={list}
                            title={"Picked for you"}
                            onPress={(item) => this.props.navigation.navigate("ShowStack", { id: item.id })}
                        />
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
