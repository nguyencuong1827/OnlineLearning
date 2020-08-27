import React, {useContext} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as screenName from '../../../globals/constants/screen-name';
import LessonList from '../LessonList';
import QuestionView from '../Question';
import NoteView from '../Note';
import MoreView from '../More';
import {ThemeContext} from '../../../providers/theme-propvider';
import {Typography} from '../../../globals/styles';
import {LanguageContext} from '../../../providers/language-provider';

const Tab = createMaterialTopTabNavigator();
const LessonCourseNavigator = (props) => {
  const {theme2} = useContext(ThemeContext);
  const {language} = useContext(LanguageContext);
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
        options={{tabBarLabel: language === 'eng' ? 'Lesson' : 'Bài học'}}
      />
      <Tab.Screen
        name={screenName.MoreTab}
        component={QuestionView}
        options={{tabBarLabel: language === 'eng' ? 'Q&A' : 'Hỏi đáp'}}
      />
      <Tab.Screen
        name={screenName.QuestionTab}
        component={NoteView}
        options={{tabBarLabel: language === 'eng' ? 'Note' : 'Ghi chú'}}
      />
      <Tab.Screen
        name={screenName.NoteTab}
        component={MoreView}
        options={{tabBarLabel: language === 'eng' ? 'More' : 'Khác'}}
      />
    </Tab.Navigator>
  );
};
export default LessonCourseNavigator;
