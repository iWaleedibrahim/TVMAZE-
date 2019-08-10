

import React from 'react'
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const Grid = ({ list, gridTitle, columns, onPress }) => {
    return (
        <View style={styles.MainContainer}>
            <Text style={styles.listTitle}> {gridTitle} </Text>
            <FlatList
                data={list}
                renderItem={({ item }) => (
                    <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                        <TouchableOpacity
                            onPress={() => onPress(item)}
                        >
                            <Image style={styles.imageThumbnail} source={{ uri: item.image }} />
                            <Text> {item.name}</Text>
                        </TouchableOpacity>
                    </View>
                )}
                numColumns={columns}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}


