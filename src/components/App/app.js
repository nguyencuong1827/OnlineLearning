import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, StatusBar, Button, Alert} from 'react-native';
import SplashScreen from '../../SplashScreen/splash-screen';
import RootStack from '../../Navigation';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('SplashScreen');
  useEffect(() => {
    const time = setTimeout(() => {
      setCurrentScreen('Login');
    }, 2000);
    return () => clearTimeout(time);
  }, []);
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
