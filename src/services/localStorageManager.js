import AsyncStorage from '@react-native-async-storage/async-storage';
import { showErrorMessage } from '../utils/showFlashMessage';

export const getStorage = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    showErrorMessage(error);
  }
};

export const setStorage = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    showErrorMessage(error);
  }
};

export const clearItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    showErrorMessage(error);
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
   showErrorMessage(error);
  }
};
