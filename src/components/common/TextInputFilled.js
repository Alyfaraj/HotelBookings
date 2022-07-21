import React from "react";
import { View, Text, StyleSheet, I18nManager } from "react-native";
import { Input, Icon } from "react-native-elements";
import { Colors, Dimensions, Fonts } from "../../theme";

const isRequired = (inputValue, errorMessage) => errorMessage.length !== 0;

const highlightEmptyStyle = isRequired =>
  isRequired
    ? { borderColor: Colors.error, borderWidth: 1, borderBottomWidth: 1 }
    : {};

const TextInputFilled = ({
  disabled,
  label,
  placeholder,
  leftIcon,
  value,
  rightIcon,
  keyboardType,
  autoCompleteType,
  style,
  labelStyle,
  onChangeText,
  maxLength,
  errorMessage,
  inputStyle,
  inputContainerStyle,
  onBlur,
  secureTextEntry,
  multiline,
  numberOfLines,
  errorStyle,
  multeInputs
}) => {
  const emptyValue = isRequired(value, errorMessage);
  const emptyValueStyle = highlightEmptyStyle(emptyValue);

  const informativeMessage = isRequired(value, errorMessage)
    ? ""
    : errorMessage;

  return (
    <View>
      <Text style={label && [styles.labelStyle, labelStyle]}>
        {label}
      </Text>
      <Input
        disabled={disabled}
        containerStyle={{
          marginBottom: multeInputs ? -Dimensions.DEVICE_HEIGHT * 0.004 : 0
        }}
        inputContainerStyle={[
          inputContainerStyle,
          styles.inputContainerStyle,
          style,
          { paddingRight: emptyValue ? 0 : 10 },
          emptyValueStyle
        ]}
        inputStyle={[styles.InputStyle, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={Colors.grey}
        rightIcon={rightIcon && !emptyValue && rightIcon}
        leftIcon={leftIcon && leftIcon}
        autoCompleteType={autoCompleteType}
        value={value}
        onChangeText={onChangeText}
        maxLength={maxLength}
        multiline={multiline}
        errorMessage={errorMessage}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        numberOfLines={numberOfLines}
        errorStyle={[
          errorStyle,
          styles.errorStyle,
          {
            marginBottom: errorMessage
              ? Dimensions.DEVICE_HEIGHT * 0.001
              : -Dimensions.DEVICE_HEIGHT * 0.01
          }
        ]}
      />
    </View>
  );
};

TextInputFilled.defaultProps = {
  autoCompleteType: "off",
  keyboardType: "default",
  errorMessage: "",
  onChangeText: () => console.warn("onChangeText function props is required")
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: Colors.white,
    height: 55,
    paddingHorizontal: 10,
    borderRadius: 28,
    borderBottomWidth: 0
  },
  labelStyle: {
    fontFamily: Fonts.REGULAR,
    fontSize: 16,
    marginVertical: Dimensions.DEVICE_HEIGHT * 0.006,
    color: Colors.black,
    textAlign: "left",
    marginStart: Dimensions.DEVICE_WIDTH * 0.08,
    marginBottom:16
  },
  InputStyle: {
    fontFamily: Fonts.REGULAR,
    paddingHorizontal: Dimensions.DEVICE_WIDTH * 0.02,
    borderRadius: Dimensions.DEVICE_WIDTH * 0.018,
    paddingVertical: 0,
    textAlign: I18nManager.isRTL ? "right" : "left",
    fontSize: 14,
    borderColor: Colors.dark
    // borderWidth: 1
    //  paddingTop:4
  },
  errorStyle: {
    textAlign: "left",
    fontSize: 11,
    fontFamily: Fonts.REGULAR,
    marginHorizontal: Dimensions.DEVICE_WIDTH * 0.1,
    marginTop: 5
  }
});
export default TextInputFilled;
