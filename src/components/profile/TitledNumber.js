import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Fonts } from '../../theme'

const TitledNumber = ({ count, title, onPress }) => {
    return (
        <Pressable onPress={onPress} >
            <View style={{ alignItems: 'center' }} >
                <Text style={styles.number} >{count}</Text>
                <Text style={styles.title} >{title}</Text>
            </View>
        </Pressable>
    )
}

export default TitledNumber

const styles = StyleSheet.create({
    number: {
        fontFamily: Fonts.BOLD,
        fontSize: 26,
        color: Colors.primary
    },
    title: {
        fontFamily: Fonts.REGULAR,
        fontSize: 14,
        color: Colors.grey,
        marginTop: 6
    },
})