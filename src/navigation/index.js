
import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { History, OnBoarding, HotelDetails, Home, Profile, Auth } from "../screens";
import MainStack from "./AppStack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "../screens/Splash";
import { AppContext, AppProvider } from "../context/AppContext";
import { Host, Portal } from 'react-native-portalize';

const Stack = createStackNavigator();

const LoadingStack = createStackNavigator()




const AuthUserStack = () => {
    const { user } = useContext(AppContext)

    return (
        <LoadingStack.Navigator>
            {!user?.email ? <LoadingStack.Screen
                name="Auth"
                component={Auth}
                options={{ headerShown: false }}
            /> :
                <LoadingStack.Screen
                    name="MainStack"
                    component={MainStack}
                    options={{ headerShown: false }}
                />}

        </LoadingStack.Navigator>
    )
}

const AppStack = ({ }) => {
    return (
        <NavigationContainer>
            <Host>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Splash"
                        component={Splash}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="OnBoarding"
                        component={OnBoarding}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="AuthUserStack"
                        component={AuthUserStack}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </Host>
        </NavigationContainer>
    );
};

export default AppStack;
