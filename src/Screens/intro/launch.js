import React, { Component } from 'react'
import { Image, View, StyleSheet, Dimensions, StatusBar } from 'react-native'

class Launch extends Component {

    componentDidMount() {
        setTimeout(() => this.props.navigation.navigate("AuthStack"), 1000)
    }

    render() {
        const logo = require('../../Assets/logo.png');
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor={'#151515'} />
                <Image
                    style={styles.logo}
                    source={logo}
                />
            </View>
        )
    }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#151515'
    },
    logo: {
        width: width / 2.1,
        height: height / 7,
        resizeMode: 'contain'
    }
});

export { Launch };
