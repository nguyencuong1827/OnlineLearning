import React, {useContext} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import * as screenName from '../../../globals/constants/screen-name';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ThemeContext} from '../../../providers/theme-propvider';
import {Typography} from '../../../globals/styles';
import {LessonProvider} from '../../../providers/lesson-provider';
import AuthorDetail from '../../../screens/AuthorDetail';
import ForumQuestion from '../../../screens/ForumQuestion';
import LessonCourse from '../../../screens/LessonCourse';
const LessonCourseStack = createStackNavigator();
const LessonCourseNavigatorStack = (props) => {
  const {navigation, route} = props;
  const {theme2} = useContext(ThemeContext);
  return (
    <LessonProvider>
      <LessonCourseStack.Navigator
        headerMode="screen"
        mode="modal"
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme2.themeColor,
          },
          headerTintColor: theme2.primaryTextColor,
          headerTitleStyle: {
            ...Typography.fontBold,
            fontSize: Typography.fontSize20,
          },
          headerBackTitleVisible: false,
          headerBackImage: () => (
            <MaterialIcons name="close" size={35} color={theme2.primaryColor} />
          ),
          gestureEnabled: true,
          cardOverlayEnabled: true,
          headerStatusBarHeight:
            navigation.dangerouslyGetState().routes.indexOf(route) > 0
              ? 10
              : undefined,
          ...TransitionPresets.ModalPresentationIOS,
        }}
        initialRouteName={screenName.LessonCourseScreenStack}>
        <LessonCourseStack.Screen
          name={screenName.LessonCourseScreen}
          component={LessonCourse}
          options={{headerShown: false}}
          initialParams={{id: 1}}
        />
        <LessonCourseStack.Screen
          name={screenName.AuthorDetailScreen}
          component={AuthorDetail}
          options={{title: 'Author'}}
        />
        <LessonCourseStack.Screen
          name={screenName.ForumQuestion}
          component={ForumQuestion}
          initialParams={{itemQuestion: 1}}
          options={{
            title: 'Q&A',
          }}
        />
      </LessonCourseStack.Navigator>
    </LessonProvider>
  );
};
export default LessonCourseNavigatorStack;
