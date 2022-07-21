import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Dimensions, Fonts } from '../../theme'
import Icon from 'react-native-vector-icons/Feather'

const ProfilePicture = () => {
    return (
        <View style={styles.container} >
            <View>
                <Image style={styles.image} source={{uri:'https://img.youm7.com/large/32016184431907FFFFFF4.jpg'}} />
                <View style={styles.icon} >
                    <Icon
                        size={20}
                        name='camera'
                        color={Colors.white}
                    />
                </View>
            </View>
            <Text style={styles.name}>Daniel Bronks</Text>
            <Text style={styles.address} >Egypt</Text>
        </View>
    )
}

export default ProfilePicture

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: Dimensions.DEVICE_HEIGHT * .1
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 50,
        backgroundColor: Colors.grey
    },
    icon: {
        backgroundColor: Colors.primary,
        position: 'absolute',
        bottom: 5,
        right: -5,
        width: 35,
        height: 35,
        borderRadius: 35,
        borderWidth: 1,
        borderColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontFamily: Fonts.BOLD,
        marginTop: 10,
        color: 'black',
        fontSize: 20
    },
    address: {
        fontFamily: Fonts.REGULAR,
        color: Colors.grey,
        fontSize: 14
    }


})