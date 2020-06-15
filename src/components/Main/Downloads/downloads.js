import React from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import ListCourses from '../../Courses/ListCourses/list-courses';

const Downloads = (props) => {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.downloads}>Downloads</Text>
        <TouchableOpacity onPress={() => Alert.alert('Comming soon!!!')}>
          <Text style={styles.remove}>Remove all</Text>
        </TouchableOpacity>
      </View>
      <ListCourses {...props} />
    </View>
  );
};

export default Downloads;
const styles = StyleSheet.create({
  title: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  downloads: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  remove: {
    color: '#1565c0',
    fontSize: 14,
  },
});
