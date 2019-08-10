
import React, { Component } from 'react'
import { TextInput, View, Text } from 'react-native'
import { Grid, Loading, HeaderTitle, HeaderButton } from '../../Components'
import { loadShows, searchShow } from '../../Store/Actions'
import { Images } from '../../Assets'
import { connect } from 'react-redux'
import { styles } from './styles'

class ShowList extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <HeaderTitle headerTitle={'TV Shows'} />,
            // headerLeft: <HeaderButton image={Images.backArrow} onClick={() => navigation.pop()} />,
            headerRight: <HeaderButton image={Images.menu} onClick={() => navigation.openDrawer()} />,
        };
    };

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    componentDidMount() {
        this.props.loadShows()
    }

    goToShow = (item) => {
        this.props.navigation.navigate("Show", { id: item.id })
    }

    handleTextChange(searchTerm) {
        this.state.searchTerm = searchTerm
        if (searchTerm !== '')
            this.props.searchShow(searchTerm)
        else {
            this.props.loadShows()
        }
    }

    render() {
        const { list, searchList, searchTerm, loading } = this.props
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
                {
                    loading ?
                        <Loading /> :
                        <Grid
                            list={searchTerm ? searchList : list}
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
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowList);
