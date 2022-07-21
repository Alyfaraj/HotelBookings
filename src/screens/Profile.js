import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Layout from '../components/common/Layout'
import { OptionItem, ProfilePicture, TitledNumber } from '../components/profile'
import { Colors, Dimensions, Fonts } from '../theme'
import { AppContext } from '../context/AppContext'

const Profile = ({ navigation }) => {
    const {logoutUser}=useContext(AppContext)
    return (
        <Layout>
            <ProfilePicture />

            <View style={styles.row} >
                <TitledNumber count={47} title='Reviews' />
                <TitledNumber count={75} title='Transactions' />
                <TitledNumber count={2} title='Bookings' onPress={() => navigation.navigate('History')} />
            </View>

            <Text style={styles.optionText} >Options</Text>
            <OptionItem
                showArrow
                title='User Settings'
                iconColor={Colors.grey}
                iconName='award'
            />
            <OptionItem
                onPress={() => logoutUser()}
                title='Logout'
                iconColor={Colors.grey}
                iconName='log-out'
            />
            <OptionItem
                showArrow
                title='Bookings'
                iconColor={Colors.primary}
                iconName='check-circle'
            />

        </Layout>
    )
}


export default Profile

const styles = StyleSheet.create({
    row: {
        width: Dimensions.DEVICE_WIDTH * .9,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        alignContent: 'center',
        flexDirection: 'row',
        paddingVertical: 14,
        backgroundColor: Colors.white,
        borderRadius: 10,
        marginVertical: 40

    },
    optionText: {
        marginStart: Dimensions.DEVICE_WIDTH * .07,
        fontSize: 20,
        color: Colors.black,
        fontFamily: Fonts.BOLD, marginBottom: 16
    }
})