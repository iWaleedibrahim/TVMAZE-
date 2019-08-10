import React from 'react'
import { Image, Text, View } from 'react-native'
import { styles } from './styles'

export const HeaderTitle = ({ icon, headerTitle, headerSubTitle, headerTextColor }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {icon && <Image style={styles.headerImg} source={icon} />}
                <Text style={[styles.headerText, { color: headerTextColor }]}>{headerTitle}</Text>
            </View>
            {headerSubTitle && headerSubTitle}
        </View>
    )
}
