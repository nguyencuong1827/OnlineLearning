import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const NoResults = (props) => {
  //console.log(props.route);
  return (
    <View style={styles.container}>
      <Icon name="search1" size={80} color="#bdc3c7" />
      <Text style={styles.noResults}>No results</Text>
      <Text style={styles.title}>
        We couldn't find any math for {props.route.params.searchContent}
      </Text>
    </View>
  );
};

export default NoResults;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  noResults: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#bdc3c7',
  },
  title: {
    color: '#bdc3c7',
  },
});
