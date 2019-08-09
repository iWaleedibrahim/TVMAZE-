
import React, { Component } from 'react'
import { TextInput, View, Text } from 'react-native'
import { Grid, Loading } from '../../Components'
import { loadShows, searchShow, noResultAfterTimeOut } from '../../Store/actions/loadShows'
import { connect } from 'react-redux'
import { styles } from './styles'



class ShowList extends Component {


    goToShow = (item) => {
        this.props.navigation.navigate("ShowStack", { id: item.id })
    }

    componentDidMount() {
        this.props.loadShows()
    }

    handleTextChange(searchTerm) {
        if (searchTerm !== '')
            this.props.searchShow(searchTerm)
        else {
            this.props.loadShows()
        }
    }

    render() {
        const { list, searchList, searchTerm, loading, noReuslt } = this.props
        return (
            <View style={{ flex: 1 }}>
                <TextInput
                    // inlineImageRight='search_icon'
                    underlineColorAndroid={false}
                    maxLength={25}
                    style={styles.searchBox}
                    placeholderTextColor={'#999'}
                    placeholder={"Search All TV Shows Here"}
                    onChangeText={(text) => this.handleTextChange(text)}
                    value={searchTerm}
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid={'transparent'}
                />

                {loading ? <Loading />
                    :
                    noReuslt ? <Text style={{ fontSize: 50 }}> No Result </Text> :
                        < Grid
                            list={list || searchList}
                            columns={3}
                            onPress={(item) => { this.goToShow(item) }}
                        />
                }
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.showsReducer.list,
        searchList: state.showsReducer.searchList,
        loading: state.showsReducer.loading,
        noReuslt: state.showsReducer.noReuslt
    }
}

const mapDispatchToProps = dispatch => ({
    loadShows: () => dispatch(loadShows()),
    searchShow: searchTerm => dispatch(searchShow(searchTerm)),
    // noResultAfterTimeOut: () => dispatch(noResultAfterTimeOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowList);
