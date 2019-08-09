import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    searchBox: {
        borderWidth: 0.2,
        borderColor: 'teal',
        height: width - 50,
        height: 50,
        borderRadius: 15,
        paddingLeft: 15,
        fontSize: 18,
        color: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.7,
    }
})
