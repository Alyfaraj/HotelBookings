import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Dimensions, Fonts } from '../theme'
import { AppButton } from '../components/common'
import { setStorage } from '../services/localStorageManager'

const OnBoarding = ({ navigation }) => {

    const handleSkip = async () => {
        await setStorage('@openbefore', 'openbefore')
        navigation.replace('AuthUserStack')
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.screen }} >
            <Image
                borderBottomRightRadius={20}
                borderTopRightRadius={10}
                style={styles.image}
                source={{ uri: 'https://sundayinwonderland.com/wp-content/uploads/2020/03/traveling-from-home.jpg' }}
            />
            <Text style={styles.title} >Travel with no worry</Text>
            <Text style={styles.subTitle} >
                You can now experience the next level travel experience for hotel bookings.
            </Text>
            <AppButton title='Next' btWidth={40} btHeight={57} onPress={handleSkip} />
        </SafeAreaView>
    )
}

export default OnBoarding

const styles = StyleSheet.create({
    image: {
        width: Dimensions.DEVICE_WIDTH * .85,
        height: Dimensions.DEVICE_HEIGHT * .55,
        borderTopRightRadius: 10,
        borderBottomEndRadius: 20,
        backgroundColor: Colors.grey,
        marginTop:Dimensions.DEVICE_HEIGHT*.05
    },
    title: {
        fontFamily: Fonts.BOLD,
        fontSize: 20,
        marginTop: 30,
        marginStart: Dimensions.DEVICE_WIDTH * .05,
        color:Colors.black

    },
    subTitle: {
        fontFamily: Fonts.REGULAR,
        fontSize: 16,
        marginTop: 20,
        marginHorizontal: Dimensions.DEVICE_WIDTH * .05,
        color: Colors.dark,
        marginBottom: 30

    }
})