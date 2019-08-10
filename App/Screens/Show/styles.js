
import { StyleSheet, Dimensions } from 'react-native'
import fonts from '../../Assets/Fonts'

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D0D0D'
    },
    upperScreenHalf: {
        flex: 0.3,
        flexDirection: 'row',
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    upperHalfImage: {
        width: width / 3,
        height: height / 4.2
    },
    textStack: {
        margin: 20,
    },
    textTitle: {
        color: '#777'
    },
    textData: {
        color: '#fff'
    },
    lowerScreenHalf: {
        flex: 0.7,
        backgroundColor: '#ddd',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    summaryBlock: {
        flexDirection: 'row'
    },
    summaryTitle: {
        fontSize: 30,
        color: '#0D0D0D',
        textAlign: 'center',
        fontFamily: 'PlayfairDisplay-Regular'
    },
    summary: {
        fontSize: 12,
        lineHeight: 15,
        fontFamily: 'Ubuntu-Medium',
        marginHorizontal: 10,
        textAlign: 'justify'
    },
    showMore: {
        height: 15,
        width: width / 4.4,
        color: 'blue'
    }
});

