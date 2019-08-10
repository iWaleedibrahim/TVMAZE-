
import { StyleSheet, Dimensions } from 'react-native'
import { fonts } from '../../Config/fonts'

const { width, height } = Dimensions.get('window')


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    scroll: {
        flex: 1,
        backgroundColor: '#ddd',
    },
    logo: {
        width: width * 0.4,
        height: height * 0.1,
        margin: 20,
        resizeMode: 'contain',
    },
    input: {
        borderRadius: 5,
        borderColor: "#123",
        paddingHorizontal: 10,
        height: 50,
        width: width * 0.9,
        borderWidth: 1,
        justifyContent: "center",
        fontSize: 16,
        backgroundColor: 'rgba(221, 221, 221, 0.1)',
        margin: 1
    },
    button: {
        borderRadius: 5,
        borderColor: "#123",
        paddingHorizontal: 10,
        height: 50,
        width: width * 0.9,
        borderWidth: 1,
        justifyContent: "center",
        backgroundColor: '#3f729b',
        margin: 10
    },
    login: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: fonts.ubuntu
    },
    forgetPassword: {
        color: '#000',
        fontSize: 12,
        margin: 10,
        fontFamily: fonts.ubuntu
    },
    fblogin: {
        width: 300,
        height: 46,
        margin: 20,
    },
    error: {
        fontSize: 12,
        color: '#000'
    },
    register: {
        marginTop: height * 0.2,
        color: '#ddd',
        fontFamily: fonts.Libre
    },
    brand: {
        fontSize: 40,
        fontFamily: fonts.chewy
    }
});
