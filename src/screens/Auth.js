import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Layout from '../components/common/Layout'
import { Dimensions } from '../theme'
import AuthType from '../components/auth/AuthType'
import LoginForm from '../components/auth/LoginForm'
import SignupForm from '../components/auth/SignupForm'



const Auth = () => {
    const [type, setType] = useState('login')


    return (
        <Layout>
            <SafeAreaView />
            <Image style={styles.logo} source={require('../assets/images/hopin.png')} />
            <AuthType selected={type} setSelected={setType} />
            {type == 'login' ? <LoginForm /> : <SignupForm />}
         
        </Layout>
    )
}

export default Auth

const styles = StyleSheet.create({
    logo: {
        width: 78,
        height: 78,
        alignSelf: 'center',
        marginVertical: Dimensions.DEVICE_HEIGHT * .05,

    },
})