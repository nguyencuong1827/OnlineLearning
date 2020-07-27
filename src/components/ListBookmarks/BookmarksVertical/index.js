import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BookmarksVertical = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This this all bookmarks screen</Text>
    </View>
  );
};

export default BookmarksVertical;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 11,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    height: 200,
  },
});
