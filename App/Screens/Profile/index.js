import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

export default class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text styles={styles.text}>{"This is Just a place holder text"}</Text>
            </View>
        )
    }
}