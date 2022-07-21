import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Colors, Dimensions, Fonts } from '../theme'
import Layout from '../components/common/Layout'
import { AppButton, Header } from '../components/common'
import Icon from 'react-native-vector-icons/AntDesign'
import BottomSheet from '../components/common/BottomSheet'
import BookingDates from '../components/booking/BookingDates'
import Feather from 'react-native-vector-icons/Feather'

const HotelDetails = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);

    const handelSubmit = (dates) => {
        setModalVisible(false)
        if (!dates.start || !dates.end) {
            setShowErrorModal(true)
        }
        else {
            setShowSuccessModal(true)
        }
    }

    return (
        <Layout
            Header={<Header title='Description' />}
        >
            <View style={styles.headerContainer} >
                <Image
                    style={styles.image}
                    source={{ uri: 'https://i.cbc.ca/1.2101005.1382019145!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/hotel-room.jpg' }} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>Tropicasa De Hotel</Text>
                    <Text style={styles.address} >Amsterdam, Netherlands</Text>
                    <View style={styles.rate} >
                        <Icon name='star' size={20} color={Colors.yellow} />
                        <Text style={styles.rateText} >
                            4.5
                            <Text style={{
                                fontFamily: Fonts.LIGHT,
                                color: Colors.dark,
                                opacity: .7,
                            }} > (2000 Reviews)</Text>
                        </Text>
                    </View>
                </View>
            </View>

            <Text style={styles.description} >
                Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are always maintaning the quality for better rating and high attitude service for you.
                {'\n \n'}
                Tropicasa De Hotel located in a strategic location, only 6 Km from the airport and 1 Km from the train station. The hotel located in the middle of the city so you can enjoy the city and see something nearby.
            </Text>
            <AppButton onPress={() => setModalVisible(true)} btWidth={40} btHeight={50} containerStyle={styles.button} title='Book' />

            {/* booking sheet */}
            <BottomSheet
                visible={modalVisible}
                onClose={() => setModalVisible(false)}>
                <BookingDates onSubmit={handelSubmit} />
            </BottomSheet>

            {/* success sheet */}
            <BottomSheet
                visible={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}>
                <Feather
                    name='check-circle'
                    size={75}
                    color={Colors.success}
                    style={styles.iconContainer} />
                <Text style={styles.sheetTitle} >Transaction Success</Text>
                <Text style={styles.sheetSubTitle} >
                    Congratulations! You can see your bookings in the booking section. Enjoy your trip!
                </Text>
                <AppButton title='Back To Home' onPress={() => {
                    setShowSuccessModal(false)
                    navigation.pop()
                }} />
            </BottomSheet>

            {/* error sheet */}
            <BottomSheet
                visible={showErrorModal}
                onClose={() => setShowErrorModal(false)}>
                <Icon
                    name='closecircleo'
                    size={75}
                    color={Colors.error}
                    style={styles.iconContainer} />
                <Text style={styles.sheetTitle} >Transaction Failed</Text>
                <Text style={styles.sheetSubTitle} >
                    Please check your internet connection and try again in a moments. Good luck!
                </Text>
                <AppButton title='Try Again' onPress={() => {
                    setShowErrorModal(false)
                    setModalVisible(true)
                }} />
            </BottomSheet>
        </Layout>
    )
}

export default HotelDetails

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        width: Dimensions.DEVICE_WIDTH * .85,
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
    rateText: {
        fontFamily: Fonts.BOLD,
        fontSize: 14,
        color: Colors.yellow,
        marginStart: 5
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    description: {
        fontSize: 14,
        width: Dimensions.DEVICE_WIDTH * .8,
        alignSelf: 'center',
        textAlign: 'left',
        color: Colors.dark,
        marginTop: 30
    },
    button: {
        position: 'absolute',
        bottom: 20,

    },
    iconContainer: {
        alignSelf: "center"
    },
    sheetTitle: {
        fontSize: 22,
        fontFamily: Fonts.BOLD,
        color: Colors.black,
        alignSelf: 'flex-start',
        marginTop: 30,
        marginBottom: 10

    },
    sheetSubTitle: {
        fontSize: 16,
        fontFamily: Fonts.REGULAR,
        color: Colors.grey,
        alignSelf: 'flex-start',
        textAlign: 'left',
        marginBottom: 30
    }

})