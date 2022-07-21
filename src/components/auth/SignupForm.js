import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import TextInputFilled from '../common/TextInputFilled'
import { AppButton } from '../common'
import Icon from 'react-native-vector-icons/Feather'
import { Colors, Dimensions, Fonts } from '../../theme'
import { Formik } from "formik";
import * as Yup from "yup";
import { AppContext } from '../../context/AppContext'

const SignupForm = () => {
    const [secureTextEntry, setSecureTextEntry] = useState(true)

    const { signup, loading } = useContext(AppContext)

    const initialValues = {
        email: "",
        password: "",
        username: ''
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Please add correct email')
            .required('You must add email')
            .trim(),
        username: Yup.string()
            .required('You must add username')
            .trim(),
        password: Yup.string()
            .required('You must add password')
            .trim()
    });

    return (
        <View>
            <Formik
                initialValues={initialValues}
                onSubmit={values => {
                    signup(values);
                }}
                validationSchema={validationSchema}
            >

                {formikProps =>
                    <>
                        <TextInputFilled
                            label='Username'
                            placeholder='Create your username'
                            maxLength={50}
                            multeInputs
                            value={formikProps.values.username}
                            errorMessage={
                                formikProps.touched.username && formikProps.errors.username
                            }
                            onBlur={() => formikProps.setFieldTouched("username")}
                            onChangeText={formikProps.handleChange("username")}
                        />
                        <TextInputFilled
                            label='E-mail'
                            placeholder='Enter your email'
                            maxLength={50}
                            keyboardType="email-address"
                            multeInputs
                            value={formikProps.values.email}
                            errorMessage={
                                formikProps.touched.email && formikProps.errors.email
                            }
                            onBlur={() => formikProps.setFieldTouched("email")}
                            onChangeText={formikProps.handleChange("email")}
                        />
                        <TextInputFilled
                            label='Password'
                            placeholder='Create your password'
                            secureTextEntry={secureTextEntry}
                            rightIcon={(<Pressable style={{ marginEnd: 10 }} onPress={() => setSecureTextEntry(!secureTextEntry)} >
                                <Icon name={secureTextEntry ? 'eye-off' : 'eye'} color={Colors.grey} size={21} />
                            </Pressable>)}
                            maxLength={50}
                            value={formikProps.values.password}
                            errorMessage={
                                formikProps.touched.password && formikProps.errors.password
                            }
                            onBlur={() => formikProps.setFieldTouched("password")}
                            onChangeText={formikProps.handleChange("password")}
                        />
                        <AppButton
                            loading={loading}
                            onPress={formikProps.handleSubmit}
                            title='Sign Up' />
                    </>
                }
            </Formik>
        </View>
    )
}

export default SignupForm

const styles = StyleSheet.create({

})