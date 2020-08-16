import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import * as screenName from '../../../globals/constants/screen-name';
import QuestionComponent from '../QuestionComponent';
import {ThemeContext} from '../../../providers/theme-propvider';
import {LessonContext} from '../../../providers/lesson-provider';
import {AuthenticationContext} from '../../../providers/authentication-provider';
import {BoxModel, Styles, Size, Distance} from '../../../globals/styles';
import axiosClient from '../../../api/axiosClient';
import PrimaryButton from '../../Authentication/PrimaryButton';
import SubPrimaryButton from '../../Authentication/SubPrimaryButton';
import configToken from '../../../api/config-token';

const onPressAddQuestion = () => {};
const onPressForumQuestion = () => {};

const QuestionView = (props) => {
  const {theme} = useContext(ThemeContext);
  const {itemCourse} = useContext(LessonContext);
  const {userState} = useContext(AuthenticationContext);
  const [question, setQuestion] = useState({});
  const {navigation} = props;
  useEffect(() => {
    const fetchQuestion = async () => {
      const url = '/forum/question/all';
      try {
        let page = 1;
        let pageSize = 6;
        let response = await axiosClient.get(
          `${url}/?page=${page}&pageSize=${pageSize}&courseId=${itemCourse.id}`,
          configToken(userState.token),
        );
        if (response.status === 200) {
          setQuestion(response.data.payload);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemCourse, userState]);

  const onPressResponse = (itemQuestion) => {
    navigation.navigate(screenName.ForumQuestion, {itemQuestion: itemQuestion});
  };
  const questionContent = () => {
    if (question.questions) {
      return question.questions.map((itemQuestion) => (
        <QuestionComponent
          itemQuestion={itemQuestion}
          onPressResponse={onPressResponse}
          key={itemQuestion.id}
        />
      ));
    }
  };
  return (
    <ScrollView style={{backgroundColor: theme.themeColor}}>
      {questionContent()}
      <PrimaryButton
        title="Forum Question"
        onPress={onPressForumQuestion}
        active={true}
        icon="star-o"
        style={[styles.buttonContainer, {backgroundColor: theme.primaryColor}]}
      />
      <SubPrimaryButton
        title="Add Question"
        onPress={onPressAddQuestion}
        active={true}
        style={[
          styles.buttonContainer,
          styles.subButtonContainer,
          {borderColor: theme.primaryColor},
        ]}
      />
      <View style={styles.footer} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    width: Size.scaleSize(200),
    height: Size.scaleSize(40),
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    ...BoxModel.marginVertical,
  },
  subButtonContainer: {
    ...Styles.center,
    ...BoxModel.smallBorderRadius,
    height: Size.scaleSize(40),
    borderWidth: Distance.superSmall,
  },
  container: {flex: 1},

  footer: {
    height: Size.scaleSize(50),
  },
});
export default QuestionView;
