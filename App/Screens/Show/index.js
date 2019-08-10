import React, { Component } from 'react'
import { Images } from '../../Assets'
import { HeaderTitle, HeaderButton } from '../../Components'
import { Text, View } from 'react-native'
import { styles } from './styles'

export default class Show extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: <HeaderTitle headerTitle={'SHOW DETAILS'} />,
            headerLeft: <HeaderButton image={Images.backArrow} onClick={() => navigation.pop()} />,
            headerRight: <HeaderButton image={Images.menu} onClick={() => navigation.openDrawer()} />,
        };
    };

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