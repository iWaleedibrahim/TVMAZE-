import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'

const Loading = ({ props }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size={'large'}
                color={'blue'}
            />
            <Text style={{ paddingTop: 10 }}> {"LOADING..."}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd'
    }
});

export { Loading }
