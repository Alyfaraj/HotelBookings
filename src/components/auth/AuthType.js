import { Platform, StyleSheet, View, Text,Pressable } from 'react-native'
import React from 'react'
import { Dimensions, Colors, Fonts } from '../../theme'

const buttons = [
    {
        title: 'Login',
        id: 'login'
    },
    {
        title: 'Sign up',
        id: 'signup'
    }
]

const AuthType = ({ selected, setSelected }) => {


    return (
        <View style={styles.container}>
            {buttons.map(button => (
                <Pressable key={button.id} onPress={()=>setSelected(button.id)} >
                    <View style={[styles.selectedBottom, {
                        borderBottomWidth: button.id == selected ? 2 : 0,
                    }]} >
                        <Text style={button.id == selected ? styles.selectedText : styles.unSelectedText} >
                            {button.title}
                        </Text>
                    </View>
                </Pressable>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: Dimensions.DEVICE_WIDTH,
        backgroundColor: Colors.white,
        marginVertical: 20
    },
    unSelectedText: {
        fontFamily: Fonts.MEDIUM,
        fontSize: 17,
        color: Colors.grey
    },
    selectedText: {
        fontFamily: Fonts.BOLD,
        fontSize: 17,
        color: Colors.black
    },
    selectedBottom: {
        paddingVertical: 16,
        width: Dimensions.DEVICE_WIDTH / 2,
        alignSelf: 'center',
        alignItems: 'center',
        borderBottomColor: Colors.primary
    }
})
export default AuthType