import React, {useContext} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as screenName from '../../../globals/constants/screen-name';
import LessonList from '../LessonList';
import QuestionView from '../Question';
import NoteView from '../Note';
import MoreView from '../More';
import {ThemeContext} from '../../../providers/theme-propvider';
import {Typography} from '../../../globals/styles';

const Tab = createMaterialTopTabNavigator();
const LessonCourseNavigator = (props) => {
  const {theme2} = useContext(ThemeContext);
  return (
    <Tab.Navigator
      initialRouteName={screenName.LectureTab}
      tabBarOptions={{
        activeTintColor: theme2.primaryColor,
        inactiveTintColor: theme2.grayDarkColor,
        labelStyle: {...Typography.fontBold, fontSize: Typography.fontSize12},
        indicatorStyle: {
          backgroundColor: theme2.primaryColor,
        },
        style: {backgroundColor: theme2.backgroundColor},
      }}
      animationEnabled={true}>
      <Tab.Screen
        name={screenName.LectureTab}
        component={LessonList}
        options={{tabBarLabel: 'Lecture'}}
      />
      <Tab.Screen
        name={screenName.MoreTab}
        component={QuestionView}
        options={{tabBarLabel: 'Q&A'}}
      />
      <Tab.Screen
        name={screenName.QuestionTab}
        component={NoteView}
        options={{tabBarLabel: 'Note'}}
      />
      <Tab.Screen
        name={screenName.NoteTab}
        component={MoreView}
        options={{tabBarLabel: 'More'}}
      />
    </Tab.Navigator>
  );
};
export default LessonCourseNavigator;
