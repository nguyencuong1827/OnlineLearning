import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Rating from 'react-native-star-rating';
import {ScaleSize} from '../../../../globals/styles';

const CourseItemVertical = (props) => {
  const onPressListItem = () => {
    props.navigation.navigate('CourseDetail', {item: props.item});
  };
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        // Alert.alert('Notification', `Pressed on ${props.item.title}`, [
        //   {
        //     text: 'Cancel',
        //     onPress: () => console.log('Pressed on cancel line: 18'),
        //   },
        //   {
        //     text: 'Ok',
        //     onPress: () => {
        //       Share.share({
        //         message: 'React native with hook',
        //       });
        //     },
        //   },
        // ]);
        onPressListItem();
      }}>
      <Image
        style={styles.img}
        source={require('../../../../../assets/images/rambutan.jpg')}
      />
      <View style={styles.content}>
        <Text>{props.item.title}</Text>
        <Text style={styles.darkText}>{props.item.author}</Text>
        <Text
          style={
            styles.darkText
          }>{`${props.item.level} . ${props.item.released} . ${props.item.duration} hours`}</Text>
        <View style={styles.ratingContainer}>
          <Rating
            disabled={true}
            maxStars={5}
            rating={props.item.averageRating}
            starSize={15}
            fullStarColor="#f39c12"
            starStyle={styles.starRating}
          />
          <Text style={styles.darkText}>
            {'   '}({props.item.totalRating})
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CourseItemVertical;
const styles = StyleSheet.create({
  item: {
    margin: 10,
    flexDirection: 'row',
    height: ScaleSize.scaleSizeWidth(80),
  },
  img: {
    width: ScaleSize.scaleSizeWidth(80),
    height: ScaleSize.scaleSizeWidth(50),
  },
  content: {
    paddingLeft: 10,
  },
  darkText: {
    color: 'gray',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 3,
  },
  starRating: {
    padding: 2,
  },
});
