import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Show extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text styles={styles.text}>
                    this is details page for show of id "{this.props.navigation.getParam('id', 'NO-ID')}"
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd'
    }
});

export { Show };
