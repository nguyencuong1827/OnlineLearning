import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, StatusBar, Button, Alert} from 'react-native';
import SplashScreen from '../../SplashScreen/splash-screen';
import RootStack from '../Navigation/root-stack';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('SplashScreen');
  setTimeout(() => {
    setCurrentScreen('Login');
  }, 3000);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {currentScreen === 'SplashScreen' ? <SplashScreen /> : <RootStack />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
