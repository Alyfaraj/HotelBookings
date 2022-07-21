import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Colors from '../theme/Colors'
import { Dimensions } from '../theme'
import { getStorage } from '../services/localStorageManager'
import { AppContext } from '../context/AppContext'

const Splash = ({ navigation }) => {
    const { setUser } = useContext(AppContext)

    const getUserData = async () => {
        const user = await getStorage('@user')
        setUser(user)
        navigation.replace('AuthUserStack')
    }

    const checkAppNavigation = async () => {
        const appOpenedBefore = await getStorage('@openbefore')
        if (appOpenedBefore) {
            getUserData()
        }
        else {
            navigation.replace('OnBoarding')
        }
    }


    useEffect(() => {
        clearTimeout(timeout);
        let timeout = setTimeout(() => {
            checkAppNavigation()
        }, 1400);
    }, [])

    return (
        <View style={styles.container} >
            <Image style={styles.logo} source={require('../assets/images/splash_logo.png')} />
            <Image
                style={styles.pattern}
                source={require('../assets/images/splash_pattern.png')} />
            <Image
                style={styles.patternTop}
                source={require('../assets/images/splash_pattern.png')} />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 78,
        height: 78
    },
    pattern: {
        width: Dimensions.DEVICE_WIDTH * .62,
        height: Dimensions.DEVICE_HEIGHT * .36,
        position: 'absolute',
        bottom: -10,
        right: -10
    },
    patternTop: {
        resizeMode: 'contain',
        width: 245,
        height: 307,
        position: 'absolute',
        top: -10,
        left: -10,
        transform: [{ rotate: '180deg' }]


    }
})