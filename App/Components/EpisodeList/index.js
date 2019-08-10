import React, { Component } from 'react'
import { episodeController } from '../../Controllers'
import { FlatList, View } from 'react-native'
import { Card, Loading } from '.'
import { styles } from './styles'

export class EpsoideList extends Component {
    constructor(){
        this.state = { 
            list: [],
            loading: true
        }
    }

    componentDidMount() {
        this.getList()
    }

    async getList() {
        try {
            const collection = await episodeController.getEpisodesList();
            this.setState({ list: collection.list, loading: false })
        }
        catch (e) {
            console.log("error ==>", e)
        }
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
