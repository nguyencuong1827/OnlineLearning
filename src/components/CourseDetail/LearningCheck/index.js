import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Colors, DistanceScale} from '../../../globals/styles';

const LearningCheck = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon name="target" size={20} />
      <Text>{'  '}Take a learning check</Text>
    </TouchableOpacity>
  );
};

export default LearningCheck;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.silver,
    padding: DistanceScale.spacing_5,
    marginHorizontal: DistanceScale.spacing_12,
    marginTop: DistanceScale.spacing_8,
    borderRadius: 5,
  },
});
