import React from "react";
import { View, Text, Pressable } from "react-native";
import { Icon } from "react-native-elements";
import { Colors, Dimensions, Fonts } from "../../theme";

const EmpatyScreen = ({ title = "Please try again later" ,onPress}) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
            }}
        >
            <Icon
                style={{
                    opacity: 0.2,
                    marginBottom: 16,
                    marginTop: Dimensions.DEVICE_HEIGHT * 0.25
                }}
                size={Dimensions.DEVICE_HEIGHT * 0.09}
                name="exclamationcircle"
                type="ant-design"
            />
            <Text
                style={{
                    color: Colors.black,
                    fontFamily: Fonts.MEDIUM,
                    fontSize: 16,
                }}
            >
                {title}
            </Text>
            <Pressable onPress={onPress} >
                <Text
                    style={{
                        color: Colors.primary,
                        fontFamily: Fonts.BOLD,
                        fontSize: 16,
                        marginTop:5
                    }}
                >
                    Try Again
                </Text>
            </Pressable>
        </View>
    );
};

export default EmpatyScreen;
