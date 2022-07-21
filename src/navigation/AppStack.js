import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { History, OnBoarding, HotelDetails, Home, Profile } from "../screens";

const Stack = createStackNavigator();

const MainStack = ({ }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="HotelDetails"
                component={HotelDetails}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
           
            <Stack.Screen
                name="History"
                component={History}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default MainStack;
