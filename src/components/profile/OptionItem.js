import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Dimensions, Fonts } from '../../theme'
import Icon from 'react-native-vector-icons/Feather'

const OptionItem = ({ iconName, iconColor, title, onPress, showArrow }) => {
    return (
        <Pressable onPress={onPress} >
            <View style={styles.container} >
                <Icon name={iconName} size={24} color={iconColor} />
                <Text style={styles.title} >{title}</Text>
                {showArrow && <Icon style={styles.arrow} name='chevron-right' color={Colors.primary} size={25} />}
            </View>
        </Pressable>
    )
}

export default OptionItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 18,
        borderRadius: 10,
        borderWidth: .7,
        borderColor: Colors.grey,
        width: Dimensions.DEVICE_WIDTH * .9,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        paddingHorizontal: Dimensions.DEVICE_WIDTH * .03,
        alignItems: 'center',
        marginBottom: 20
    },
    title: {
        fontFamily: Fonts.MEDIUM,
        color: Colors.black,
        marginStart: Dimensions.DEVICE_WIDTH * .04,
        fontSize: 16
    },
    arrow: {
        position: 'absolute',
        alignSelf: 'center',
        end: Dimensions.DEVICE_WIDTH * .03
    }

})