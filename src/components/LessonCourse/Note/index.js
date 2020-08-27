import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  Styles,
  Typography,
  BoxModel,
  Size,
  Distance,
} from '../../../globals/styles';
import {ThemeContext} from '../../../providers/theme-propvider';
import {AuthenticationContext} from '../../../providers/authentication-provider';
import {LessonContext} from '../../../providers/lesson-provider';
import axiosClient from '../../../api/axiosClient';
import configToken from '../../../api/config-token';
import {LanguageContext} from '../../../providers/language-provider';
const NoteView = (props) => {
  const {theme2} = useContext(ThemeContext);
  const {userState} = useContext(AuthenticationContext);
  const {language} = useContext(LanguageContext);
  const {itemCourse} = useContext(LessonContext);
  const [allNote, setAllNote] = useState([]);

  useEffect(() => {
    const fetchNote = async () => {
      const url = '/user-note-lesson/get-by-course';
      try {
        let response = await axiosClient.get(
          `${url}/${itemCourse.id}`,
          configToken(userState.token),
        );
        if (response.status === 200) {
          setAllNote(response.data.payload);
        } else {
          console.log(response);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchNote();
  }, [itemCourse, userState]);
  const moreAction = (item) => {
    // console.log(item);
  };
  const renderNoteItem = () => {
    if (allNote) {
      return allNote.map((note) => (
        <View key={note.id} style={Styles.fillRowCenter}>
          <View
            style={[
              Styles.fillColumnStart,
              BoxModel.marginHorizontal,
              BoxModel.tinyMarginVertical,
              styles.container,
            ]}>
            <View
              style={[
                styles.timeContainer,
                {
                  backgroundColor: theme2.primaryColor,
                  borderRadius: Size.scaleSize(15),
                },
              ]}>
              <Text
                style={[
                  Typography.fontBold,
                  BoxModel.tinyPadding,
                  {
                    color: theme2.primaryBackgroundColor,
                    fontSize: Typography.fontSize14,
                  },
                ]}>
                {Moment('1900-01-01 00:00:00')
                  .add(note.time, 'seconds')
                  .format('mm:ss')}
              </Text>
            </View>
            <View style={[Styles.fillRowStart, BoxModel.tinyMarginVertical]}>
              <FontAwesome
                name="file-text-o"
                size={15}
                color={theme2.primaryColor}
              />
              <Text
                style={[
                  Typography.fontBold,
                  BoxModel.marginHorizontal,
                  {
                    color: theme2.primaryColor,
                    fontSize: Typography.fontSize16,
                  },
                ]}>
                Lesson {note.lessonNumberOrder} - {note.lessonName}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: theme2.backgroundSeeAllButton,
                borderRadius: Size.scaleSize(5),
              }}>
              <Text
                style={[
                  Typography.fontRegular,
                  BoxModel.smallPadding,
                  {
                    color: theme2.primaryTextColor,
                    fontSize: Typography.fontSize14,
                    marginLeft: Distance.normal,
                  },
                ]}>
                {note.content}
              </Text>
            </View>
            <Text
              style={[
                Typography.fontRegular,
                BoxModel.tinyMarginVertical,
                {
                  color: theme2.grayColor,
                  fontSize: Typography.fontSize14,
                },
              ]}>
              {Moment(note.updatedAt).format(' h:mm:ss')},{' '}
              {Moment(note.updatedAt).subtract(10, 'days').calendar()}
            </Text>
          </View>
          <TouchableHighlight
            onPress={() => moreAction(note)}
            underlayColor={theme2.overlayColor}
            style={{marginRight: Distance.small}}>
            <Entypo
              name="dots-three-horizontal"
              color={theme2.primaryTextColor}
              size={20}
            />
          </TouchableHighlight>
        </View>
      ));
    }
  };

  return (
    <ScrollView style={{backgroundColor: theme2.themeColor}}>
      {allNote.length === 0 ? (
        <View style={[Styles.columnCenter, BoxModel.marginVertical]}>
          <Text
            style={[
              Typography.fontBold,
              {fontSize: Typography.fontSize20, color: theme2.primaryTextColor},
            ]}>
            {language === 'eng'
              ? 'There is nothing here yet'
              : 'Không có ghi chú nào'}
          </Text>
          <Text
            style={[
              Typography.fontRegular,
              {fontSize: Typography.fontSize14, color: theme2.grayColor},
            ]}>
            {language === 'eng'
              ? 'Tap create note to make your first note'
              : 'Nhấp để tạo ghi chú mới'}
          </Text>
        </View>
      ) : (
        renderNoteItem()
      )}
      <View style={{height: Size.scaleSize(50)}} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  timeContainer: {
    alignSelf: 'flex-start',
  },
  container: {
    flex: 1,
  },
});
export default NoteView;
