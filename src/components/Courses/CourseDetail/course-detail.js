import React from 'react';
import {View, Text, Button} from 'react-native';
const CourseDetail = (props) => {
  let item = {
    title: 'Courses Detail',
    author: 'Nguyen Cuong',
  };
  props.navigation.setOptions({title: item.title});
  return (
    <View>
      <Text>This is course detail</Text>
      <Text>
        {item.title} - {item.author}
      </Text>
      <Button
        onPress={() => props.navigation.push('CourseDetail', {item: item})}
        title="Go to the relavant course"
      />
      <Button
        onPress={() => props.navigation.navigate('ListCourses')}
        title="Go back List Courses"
      />
      <Button onPress={() => props.navigation.goBack()} title="Go back" />
      <Button
        onPress={() => props.navigation.popToTop()}
        title="Go to root view"
      />
    </View>
  );
};

export default CourseDetail;
