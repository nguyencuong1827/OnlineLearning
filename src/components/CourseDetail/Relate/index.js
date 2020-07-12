import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Colors, DistanceScale} from '../../../globals/styles';

const RelateCoursesAndPaths = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="layers" size={20} />
      <Text>
        {'  '}Related paths {'&'} courses
      </Text>
    </TouchableOpacity>
  );
};

export default RelateCoursesAndPaths;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.silver,
    padding: DistanceScale.spacing_5,
    marginHorizontal: DistanceScale.spacing_12,
    marginTop: DistanceScale.spacing_12,
    borderRadius: 5,
  },
});
