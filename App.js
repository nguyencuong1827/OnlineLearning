import React, {useState, useLayoutEffect} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import RootNavigator from './src/navigation';
import {AuthenticationProvider} from './src/providers/authentication-provider';
import {ThemeProvider} from './src/providers/theme-propvider';
import {BookmarkProvider} from './src/providers/bookmark-provider';
import SplashScreen from './src/screens/SplashScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('SplashScreen');
  useLayoutEffect(() => {
    const time = setTimeout(() => {
      setCurrentScreen('Login');
    }, 1500);
    return () => clearTimeout(time);
  }, []);
  return (
    <ThemeProvider>
      <AuthenticationProvider>
        <BookmarkProvider>
          <View style={styles.container}>
            <StatusBar hidden={true} />
            {currentScreen === 'SplashScreen' ? (
              <SplashScreen />
            ) : (
              <RootNavigator />
            )}
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
