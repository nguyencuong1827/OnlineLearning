import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import {Rating} from 'react-native-elements';

const ListCoursesItem = (props) => {
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
        source={require('../../../../assets/images/rambutan.jpg')}
      />
      <View style={styles.content}>
        <Text>{props.item.title}</Text>
        <Text style={styles.darkText}>{props.item.author}</Text>
        <Text
          style={
            styles.darkText
          }>{`${props.item.level} . ${props.item.releasedDate} . ${props.item.duration} hours`}</Text>
        <View style={styles.rating}>
          <Rating
            imageSize={20}
            readonly
            startingValue={props.item.averageRating}
          />
          <Text style={styles.darkText}>
            {'   '}({props.item.totalRating})
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ListCoursesItem;
const styles = StyleSheet.create({
  item: {
    margin: 10,
    flexDirection: 'row',
  },
  img: {
    width: 150,
    height: 80,
  },
  content: {
    height: 80,
    paddingLeft: 10,
  },
  darkText: {
    color: 'gray',
  },
  rating: {
    flexDirection: 'row',
  },
});
