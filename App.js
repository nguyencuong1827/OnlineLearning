import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Login from './src/components/Authentication/Login/login';
// import ListCourses from './src/components/Courses/ListCourses/list-courses';
//import Home from './src/components/Main/Home/home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {/* <Home /> */}
      {/* <ListCourses /> */}
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
});
