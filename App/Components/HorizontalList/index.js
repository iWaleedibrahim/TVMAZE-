
import React from 'react'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const HorizontalList = ({ title, list, onPress }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text
                    style={styles.listTitle} >
                    {title}
                </Text>
            </View>
            <View style={{ marginTop: 35 }}>
                <FlatList
                    data={list}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => onPress(item)}
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


export default HorizontalList

