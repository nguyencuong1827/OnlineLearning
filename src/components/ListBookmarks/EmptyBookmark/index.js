import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EmptyBookmark = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bookmarks</Text>
      <View style={styles.content}>
        <Icon name="bookmark-border" size={40} color="gray" />
        <Text>Use bookmarks to quickly save courses for later.</Text>
      </View>
    </View>
  );
};

export default EmptyBookmark;

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
