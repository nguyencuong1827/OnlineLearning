import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DistanceScale, Typography, Colors} from '../../../../globals/styles';

const completeLesson = (isCheck) => (
  <Icon
    name={isCheck === true ? 'check-circle-o' : 'circle-o'}
    size={Typography.fontSize14}
    color={Colors.green}
  />
);
const LessonItem = (props) => {
  return (
    <TouchableOpacity style={styles.container} underlayColor="blue">
      {completeLesson(props.isCheck)}
      <Text style={styles.subTitle}>{props.subTitle}</Text>
    </TouchableOpacity>
  );
};

export default LessonItem;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: DistanceScale.spacing_18,
    marginVertical: DistanceScale.spacing_8,
  },
  subTitle: {
    marginLeft: DistanceScale.spacing_10,
    fontSize: Typography.fontSize14,
    color: Colors.black,
  },
});
