import { Alert, Linking } from "react-native";
import { showMessage } from "react-native-flash-message";
import { Colors } from "../theme";

export const showSuccessMessage = message => {
  showMessage({
    message,
    icon: "success",
    duration: 1500,
    backgroundColor: "green"
  });
};

export const showErrorMessage = message => {
  showMessage({
    message,
    icon: "error",
    duration: 2000,
    backgroundColor: Colors.error
  });
};



export const showAlertForLoacationSettings = () => {
  Alert.alert(
    'Location services',
    'Please enable location services',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Open Settings',
        onPress: () => {
          Linking.openSettings();
        },
      },
    ],
  );
}