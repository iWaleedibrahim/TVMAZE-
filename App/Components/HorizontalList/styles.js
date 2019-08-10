import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
