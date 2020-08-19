import AsyncStorage from '@react-native-community/async-storage';

const localStorage = {
  _storeData: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  },

  _getData: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return JSON.parse(value);
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  _removeData: async (key) => {
    await AsyncStorage.removeItem(key, (error) => console.log(error));
  },

  _clearAllData: async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
    } catch (error) {
      console.error(error);
    }
  },
};
export default localStorage;
