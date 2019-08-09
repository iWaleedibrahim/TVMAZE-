
import React, { Component } from 'react'
import { View, StyleSheet, FlatList, Image, Text, TouchableOpacity } from 'react-native'

class HorizontalList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text
                        style={styles.listTitle} >
                        {this.props.title}
                    </Text>
                </View>
                <View style={{ marginTop: 35 }}>
                    <FlatList
                        data={this.props.list}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => this.props.onPress(item)}
                            >
                                <Image style={styles.imageThumbnail} source={{ uri: item.image }} />
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        horizontal={true}
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 50,
        backgroundColor: '#aaa'
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        marginLeft: 2,
        width: 85,
        borderRadius: 6,
        borderColor: 'teal'
    },
    listTitle: {
        position: 'absolute',
        color: '#111',
        fontSize: 18,
        fontWeight: '700',
        marginLeft: 15
    },
    safeArea: {
        flex: 1,
    }
});


export default HorizontalList

