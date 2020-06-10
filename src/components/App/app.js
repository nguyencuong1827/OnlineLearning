import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Login from '../Authentication/Login/login';
import SplashScreen from '../../SplashScreen/splash-screen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('SplashScreen');
  setTimeout(() => {
    setCurrentScreen('Login');
  }, 3000);
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {/* <Home /> */}
      {/* <ListCourses /> */}
      {currentScreen === 'SplashScreen' ? <SplashScreen /> : <Login />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
});
