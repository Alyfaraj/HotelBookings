import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { Colors, Dimensions, Fonts } from '../../theme'
import { useNavigation } from '@react-navigation/native'

const Header = ({ title }) => {
    const {goBack}=useNavigation()
    return (
        <SafeAreaView>
            <View style={styles.container} >
                <Pressable onPress={()=>goBack()} >
                    <Icon name='arrow-left' size={25} color={Colors.black} />
                </Pressable>
                <Text style={styles.title} >{title}</Text>
            </View>
        </SafeAreaView>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.DEVICE_WIDTH * .9,
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 10
    },
    title: {
        fontSize: 20,
        color: Colors.black,
        fontFamily: Fonts.MEDIUM,
        marginStart: 10

    }
})