import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, StatusBar, Button, Alert} from 'react-native';
import RootNavigator from './src/navigation';
// import SplashScreen from './src/screens/SplashScreen';
import {AuthenticationProvider} from './src/providers/authentication-provider';
import {ThemeProvider} from './src/providers/theme-propvider';
import {BookmarkProvider} from './src/providers/bookmark-provider';
const App = () => {
  const [currentScreen, setCurrentScreen] = useState('SplashScreen');
  // useEffect(() => {
  //   const time = setTimeout(() => {
  //     setCurrentScreen('Login');
  //   }, 2000);
  //   return () => clearTimeout(time);
  // }, []);
  return (
    <ThemeProvider>
      <AuthenticationProvider>
        <BookmarkProvider>
          <View style={styles.container}>
            <StatusBar hidden={true} />
            {/* {currentScreen === 'SplashScreen' ? <SplashScreen /> : <RootStack />} */}
            <RootNavigator />
          </View>
        </BookmarkProvider>
      </AuthenticationProvider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
