import React from 'react';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import {AuthenticationProvider} from './src/providers/authentication-provider';
import {ThemeProvider} from './src/providers/theme-propvider';
import {BookmarkProvider} from './src/providers/bookmark-provider';
import RootNavigator from './src/navigation';
const App = () => {
  return (
    <ThemeProvider>
      <AuthenticationProvider>
        <BookmarkProvider>
          <View style={styles.container}>
            <StatusBar hidden={true} />
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
