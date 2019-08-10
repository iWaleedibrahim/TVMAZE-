import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export const HeaderButton = ({ image, onClick }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => onClick()} >
            <Image source={image ? image : Images.icMenu} style={styles.image} />
        </TouchableOpacity>
    )
}