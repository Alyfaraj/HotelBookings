import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from "react-native";
import { Colors, Dimensions, Fonts } from "../../theme";

const AppButton = ({
  title,
  disabled,
  containerStyle,
  onPress,
  loading,
  titleStyle,
  btWidth = 85,
  btHeight = 58
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          height: btHeight, 
          width: Dimensions.DEVICE_WIDTH * (btWidth / 100),
          backgroundColor: disabled ? Colors.grey : Colors.primary,
          borderRadius: btHeight * 0.5
        },
        styles.container,
        containerStyle
      ]}
      activeOpacity={0.7}
      disabled={disabled || loading}
    >
      <View style={{ flexDirection: 'row' }} >
        {loading
          ? <ActivityIndicator size={30} color={Colors.white} />
          : <Text style={[styles.title, titleStyle]}>
            {title}
          </Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: Dimensions.DEVICE_HEIGHT * 0.03
  },
  title: {
    fontFamily: Fonts.BOLD,
    color: Colors.white,
    fontSize: 18,
    textAlignVertical: "center",
    marginHorizontal:5

  }
});

export default AppButton;
