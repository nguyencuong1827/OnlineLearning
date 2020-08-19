import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import StarRating from 'react-native-star-rating';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {AuthenticationContext} from '../../providers/authentication-provider';
import {ThemeContext} from '../../providers/theme-propvider';
import axiosClient from '../../api/axiosClient';
import configToken from '../../api/config-token';
import {
  Colors,
  BoxModel,
  Styles,
  Typography,
  Size,
  Distance,
} from '../../globals/styles';
import FormInput from '../../components/Authentication/FormInput';
import ButtonSubmit from '../../components/Authentication/ButtonSubmit';

const WriteFeedBack = (props) => {
  const {route, navigation} = props;
  const [feedback, setFeedback] = useState('');
  const [content, setContent] = useState(3);
  const [presentation, setPresentation] = useState(3);
  const [formality, setFormality] = useState(3);
  const {userState} = useContext(AuthenticationContext);
  const {theme2} = useContext(ThemeContext);
  const {theme} = useContext(ThemeContext);
  const onChangeFeedback = (text) => {
    setFeedback(text);
  };
  const writeFeedBack = async () => {
    const url = '/course/rating-course';
    try {
      let body = {
        courseId: route.params.courseId,
        formalityPoint: formality,
        contentPoint: content,
        presentationPoint: presentation,
        content: feedback,
      };
      let response = await axiosClient.post(
        url,
        body,
        configToken(userState.token),
      );
      if (response.status === 200) {
        Alert.alert('Notification', 'Thanks for your feedback');
        navigation.goBack();
      } else {
        Alert.alert(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ScrollView style={{backgroundColor: theme.backgroundColor}}>
      <View style={styles.rating}>
        <View style={[Styles.fillRowStart]}>
          <FontAwesome name="bookmark" size={20} color={theme2.primaryColor} />
          <Text
            style={[
              Typography.fontRegular,
              {fontSize: Typography.fontSize20, color: theme.colorMainText},
            ]}>
            {' '}
            Content
          </Text>
        </View>
        <StarRating
          disabled={false}
          maxStars={5}
          starSize={30}
          rating={content}
          fullStarColor={'#f1c40f'}
          containerStyle={styles.fillFlex}
          selectedStar={(rating) => setContent(rating)}
        />
      </View>
      <View style={styles.rating}>
        <View style={[Styles.fillRow]}>
          <FontAwesome name="bookmark" size={20} color={theme2.primaryColor} />
          <Text
            style={[
              Typography.fontRegular,
              {fontSize: Typography.fontSize20, color: theme.colorMainText},
            ]}>
            {' '}
            Presentation
          </Text>
        </View>
        <StarRating
          disabled={false}
          maxStars={5}
          starSize={30}
          rating={presentation}
          fullStarColor={'#f1c40f'}
          containerStyle={styles.fillFlex}
          selectedStar={(rating) => setPresentation(rating)}
        />
      </View>
      <View style={styles.rating}>
        <View style={[Styles.fillRow]}>
          <FontAwesome name="bookmark" size={20} color={theme2.primaryColor} />
          <Text
            style={[
              Typography.fontRegular,
              {fontSize: Typography.fontSize20, color: theme.colorMainText},
            ]}>
            {' '}
            Formality
          </Text>
        </View>
        <StarRating
          disabled={false}
          maxStars={5}
          starSize={30}
          rating={formality}
          fullStarColor={'#f1c40f'}
          containerStyle={styles.fillFlex}
          selectedStar={(rating) => setFormality(rating)}
        />
      </View>
      <FormInput
        styleInput={styles.input}
        placeholder="Your feedback"
        placeholderTextColor="gray"
        returnKeyType="go"
        autoCorrect={false}
        defaultValue={feedback}
        onChangeText={onChangeFeedback}
      />
      <ButtonSubmit
        buttonSubmitStyle={styles.buttonContainer}
        titleSubmitStyle={styles.buttonText}
        title="SUBMIT"
        onSubmit={writeFeedBack}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  title: {
    ...Typography.fontBold,
    fontSize: Typography.fontSize20,
    ...BoxModel.margin,
  },
  fillFlex: {
    flex: 1,
  },
  input: {
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 10,

    height: Size.scaleSize(100),
    paddingHorizontal: Distance.spacing_10,
    marginTop: Distance.spacing_10,

    color: Colors.white,
    fontSize: Typography.fontSize18,
    backgroundColor: Colors.darkBlue,
  },
  buttonContainer: {
    backgroundColor: Colors.orange,
    paddingVertical: Distance.spacing_12,
    borderRadius: 10,

    marginTop: Distance.spacing_12,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    color: Colors.black,
  },
  rating: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: Distance.spacing_12,
    marginHorizontal: Distance.spacing_12,
  },
});
export default WriteFeedBack;
