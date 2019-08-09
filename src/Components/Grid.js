

import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

class Grid extends Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <Text style={styles.listTitle}> {this.props.gridTitle} </Text>
                <FlatList
                    data={this.props.list}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                            <TouchableOpacity
                                onPress={() => this.props.onPress(item)}
                            >
                                <Image style={styles.imageThumbnail} source={{ uri: item.image }} />
                                <Text> {item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    numColumns={this.props.columns}
                    keyExtractor={(item) => item.id}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 20,
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    },
    listTitle: {
        position: 'absolute',
        color: '#111',
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 15
    },
});


export { Grid }

