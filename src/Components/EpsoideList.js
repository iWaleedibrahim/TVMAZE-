import React, { Component } from 'react'
import { collectionController } from '../Controllers/CollectionController'
import { FlatList, View, StyleSheet, Text } from 'react-native'
import { Card, Loading } from '.'

class EpsoideList extends Component {

    state = { list: [], loading: true }
    async getList() {
        try {
            const collection = await collectionController.getEpisodesList();
            this.setState({ list: collection.list, loading: false })
        }
        catch (e) {
            console.log("error ==>", e)
        }
    }

    componentDidMount() {
        this.getList()
    }

    render() {
        const { loading, list } = this.state
        if (loading === true)
            return <Loading />
        else {
            return (
                <View style={styles.MainContainer}>
                    <FlatList
                        data={list}
                        renderItem={({ item }) => (
                            <Card url={item.image} />
                        )}
                        numColumns={3}
                        keyExtractor={(item, index) => index}
                    />

                </View>
            )
        }
    }
}


const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 40,
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    }
});

export default EpsoideList;
