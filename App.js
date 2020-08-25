import React from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import {AuthenticationProvider} from './src/providers/authentication-provider';
import {ThemeProvider} from './src/providers/theme-propvider';
import RootNavigator from './src/navigation';
import {LanguageProvider} from './src/providers/language-provider';
const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthenticationProvider>
          <View style={styles.container}>
            <StatusBar hidden={true} />
            <RootNavigator />
          </View>
        </AuthenticationProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
