import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const SeeAllButton = (props) => {
  return (
    <TouchableOpacity style={styles.seeAllButton} onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.seeAll}>See all {'>'}</Text>
    </TouchableOpacity>
  );
};

export default SeeAllButton;
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  seeAllButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  seeAll: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 10,
    height: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#d9d9d9',
    paddingHorizontal: 10,
  },
});
