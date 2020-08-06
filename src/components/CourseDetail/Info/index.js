import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, DistanceScale, Typography} from '../../../globals/styles';
import Rating from 'react-native-star-rating';

const InfoCourse = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.level} . </Text>
      <Text style={styles.text}>{props.releasedDate} . </Text>
      <Text style={styles.text}>{props.duration} </Text>
      <Rating
        disabled={true}
        maxStars={5}
        rating={props.averageRating}
        starSize={Typography.fontSize12}
        fullStarColor={Colors.yellow}
        starStyle={styles.starRating}
        containerStyle={styles.containerStarRating}
      />
      <Text style={styles.text}> ({props.totalRating})</Text>
    </View>
  );
};

export default InfoCourse;

const styles = StyleSheet.create({
  container: {
    marginTop: DistanceScale.spacing_12,
    marginHorizontal: DistanceScale.spacing_12,
    flexDirection: 'row',
  },
  starRating: {
    padding: 2,
  },
  containerStarRating: {
    alignItems: 'center',
  },
  text: {
    color: Colors.gray,
  },
});
