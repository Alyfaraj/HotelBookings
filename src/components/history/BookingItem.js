import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, Dimensions, Fonts } from '../../theme'


const BookingItem = ({ id, name, address, end_date, start_date, image }) => {
    return (
        <View style={styles.container} >
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.address} >{address}</Text>
                <Text style={styles.date} >From {start_date} To {end_date}</Text>
            </View>
        </View>
    )
}

export default BookingItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: Dimensions.DEVICE_WIDTH * .9,
        alignSelf: 'center',
        paddingVertical: 16,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        marginTop: 14,
        borderRadius: 10,
        alignItems: 'center'
    },
    textContainer: {
        justifyContent: 'space-between',
        height: 80
    },
    image: {
        width: 95,
        height: 95,
        borderRadius: 10,
        backgroundColor: Colors.grey,
        marginEnd: 14

    },
    name: {
        fontFamily: Fonts.MEDIUM,
        fontSize: 18,
        color: Colors.black
    },
    address: {
        fontFamily: Fonts.REGULAR,
        fontSize: 14,
        color: Colors.dark,
        opacity: .8
    },
    date: {
        fontFamily: Fonts.REGULAR,
        fontSize: 14,
        color: Colors.dark,
    }

})