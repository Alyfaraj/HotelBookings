import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useState } from 'react';
import { serverKey } from '../services/constants';
import { clearItem, clearStorage, setStorage } from '../services/localStorageManager';
import { showErrorMessage } from '../utils/showFlashMessage';

export const AppContext = createContext();


export const AppProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false)


    const logoutUser = async () => {
        await clearItem('@user')
        setUser({})
    }


    const signup = (data) => {
        setLoading(true)
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${serverKey}`, {
            email: data.email,
            password: data.password,
            returnSecureToken: true
        })
            .then(res => {
                setLoading(false)
                setUser(res.data)
                setStorage('@user', res.data)
            })
            .catch(err => {
                showErrorMessage(err.response.data?.error?.message)
                setLoading(false)
            })
    }


    const login = (data) => {
        setLoading(true)
        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${serverKey}`, {
            email: data.email,
            password: data.password,
        })
            .then(res => {
                setLoading(false)
                setUser(res.data)
                setStorage('@user', res.data)
            })
            .catch(err => {
                console.log(err)
                showErrorMessage(err.response.data?.error?.message)
                setLoading(false)
            })
    }






    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                logoutUser,
                signup,
                loading,
                login

            }}
        >
            {children}
        </AppContext.Provider>
    );
};


export const Consumer = AppContext.Consumer;
