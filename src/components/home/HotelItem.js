import { StyleSheet, Text, View, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { Colors, Dimensions, Fonts } from '../../theme'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { getPlaceImage } from '../../utils/PlaceImage'

const HotelItem = ({ vicinity, placeName, rating ,photo_ref}) => {
    const { navigate } = useNavigation()
    return (
        <Pressable onPress={() => navigate('HotelDetails')} >
            <ImageBackground
                style={styles.container}
                imageStyle={styles.image}
                source={{ uri: getPlaceImage(photo_ref)}}
            >
                <View style={styles.textContainer} >
                    <Text style={styles.name} >{placeName}</Text>
                    <Text style={styles.address} >{vicinity}</Text>
                </View>
                <View style={styles.rate} >
                    <Icon name='star' size={20} color={Colors.yellow} />
                    <Text style={styles.rateText} >{rating}</Text>
                </View>
            </ImageBackground>
        </Pressable>

    )
}

export default HotelItem

const styles = StyleSheet.create({
    container: {
        width: Dimensions.DEVICE_WIDTH * .72,
        height: Dimensions.DEVICE_HEIGHT * .57,
        marginTop: 25,
        marginStart: Dimensions.DEVICE_WIDTH*.05,

    },
    image: {
        borderRadius: 25,
        backgroundColor: Colors.grey,

    },
    textContainer: {
        position: 'absolute',
        bottom: 30,
        left: 10
    },
    name: {
        fontFamily: Fonts.BOLD,
        color: Colors.white,
        fontSize: 18,
        width:Dimensions.DEVICE_WIDTH*.7
    },
    address: {
        fontFamily: Fonts.REGULAR,
        color: Colors.white,
        fontSize: 14,
        marginTop: 6,
        width:Dimensions.DEVICE_WIDTH*.7
    },
    rate: {
        flexDirection: 'row',
        backgroundColor: 'rgba(33,33,33,.5)',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 20,
        alignSelf: 'flex-end',
        marginTop: 20,
        marginEnd: 15,
        alignItems: 'center'
    },
    rateText: {
        color: Colors.white,
        marginStart: 5
    }
})