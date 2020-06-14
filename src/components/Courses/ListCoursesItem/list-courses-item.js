import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
  Share,
} from 'react-native';

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
        source={require('../../../../assets/rambutan.jpg')}
      />
      <View style={styles.content}>
        <Text>{props.item.title}</Text>
        <Text style={styles.darkText}>{props.item.author}</Text>
        <Text
          style={
            styles.darkText
          }>{`${props.item.level} . ${props.item.released} . ${props.item.duration}`}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ListCoursesItem;
const styles = StyleSheet.create({
  item: {
    margin: 5,
    flexDirection: 'row',
  },
  img: {
    width: 100,
    height: 50,
  },
  content: {
    margin: 5,
  },
  darkText: {
    color: 'darkgray',
  },
});
