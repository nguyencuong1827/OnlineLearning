import React from 'react';
import {Button, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Main/Home/home';
import ListCourses from '../Courses/ListCourses/list-courses';
import CourseDetail from '../CourseDetail/course-detail';

const Stack = createStackNavigator();
const screenOptions = {
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTintColor: 'black',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerTitleAlign: 'center',
};
const ListCoursesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ListCourses"
      screenOptions={screenOptions}>
      <Stack.Screen
        name="ListCourses"
        component={ListCourses}
        options={{
          title: 'List Courses',
          headerRight: () => (
            <Button
              title="Setting"
              onPress={() => Alert.alert('Pressed on setting button')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ListCoursesStack;
