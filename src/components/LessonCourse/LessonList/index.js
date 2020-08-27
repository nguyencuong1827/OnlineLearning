import React, {useContext, useState} from 'react';
import {
  SectionList,
  View,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Title from '../../HeaderCourseDetail/TitleItem';
import Collapsible from 'react-native-collapsible';
import {useSafeArea} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Size, Styles, Typography, BoxModel} from '../../../globals/styles';
import {ThemeContext} from '../../../providers/theme-propvider';
import {LessonContext} from '../../../providers/lesson-provider';
import {AuthenticationContext} from '../../../providers/authentication-provider';
import axiosClient from '../../../api/axiosClient';
import configToken from '../../../api/config-token';

const LessonList = (props) => {
  const {theme2} = useContext(ThemeContext);
  const {itemCourse, itemLesson, setItemLesson, listDownload} = useContext(
    LessonContext,
  );
  const [collapsibleItems, setCollapsibleItems] = useState([]);
  const {userState} = useContext(AuthenticationContext);
  const insets = useSafeArea();

  const changeColorItemLesson = (lesson) => {
    if (itemLesson) {
      if (lesson.id === itemLesson.id) {
        return theme2.primaryColor;
      }
    }

    return theme2.primaryTextColor;
  };
  const flatListSeparator = () => {
    return (
      <View
        style={[
          styles.separator,
          {backgroundColor: theme2.backgroundSeeAllButton},
        ]}
      />
    );
  };
  const checkDownload = (lessonId) => {
    const fResult = listDownload.find((item) => item.id === lessonId);
    if (!fResult) {
      return false;
    }
    return true;
  };
  const renderListItem = (ItemLesson) => {
    const isDownload = checkDownload(ItemLesson.id);
    return (
      <Collapsible collapsed={collapsibleItems.includes(ItemLesson.sectionId)}>
        <TouchableHighlight
          onPress={() => onPressPreviewLesson(ItemLesson)}
          underlayColor={theme2.overlayColor}>
          <View
            style={[
              styles.textContainer,
              BoxModel.smallMarginHorizontal,
              {backgroundColor: theme2.themeColor},
            ]}>
            <Text
              style={[
                styles.textContent,
                {color: changeColorItemLesson(ItemLesson)},
              ]}>
              {ItemLesson.name}
            </Text>
            {isDownload === true ? (
              <Ionicons
                name="md-cloud-download-outline"
                size={20}
                color={theme2.successColor}
              />
            ) : null}
            {ItemLesson.isFinish ? (
              <FontAwesome
                name="check-circle"
                size={20}
                color={theme2.successColor}
              />
            ) : undefined}
          </View>
        </TouchableHighlight>
      </Collapsible>
    );
  };
  const onPressHeader = (section) => {
    const newIds = [...collapsibleItems];
    const index = newIds.indexOf(section.data[0].sectionId);
    if (index > -1) {
      newIds.splice(index, 1);
    } else {
      newIds.push(section.data[0].sectionId);
    }
    setCollapsibleItems(newIds);
  };
  const onPressPreviewLesson = async (ItemLesson) => {
    const url = '/lesson/video';
    try {
      let response1 = await axiosClient.get(
        `${url}/${itemCourse.id}/${ItemLesson.id}`,
        configToken(userState.token),
      );

      if (response1.status === 200) {
        const resultSection = itemCourse.section.find(({lesson}) => {
          return lesson.find(({id}) => id === ItemLesson.id);
        });
        const result = resultSection.lesson.find(
          ({id}) => id === ItemLesson.id,
        );
        setItemLesson({
          ...result,
          videoUrl: response1.data.payload.videoUrl,
          currentTime: response1.data.payload.currentTime,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const renderHeader = (section) => {
    const {title} = section;
    return (
      <TouchableHighlight
        style={[
          styles.headerTouchable,
          {backgroundColor: theme2.backgroundSeeAllButton},
        ]}
        onPress={() => onPressHeader(section)}
        underlayColor={theme2.backgroundSeeAllButton}>
        <View
          style={[
            styles.headerContainer,
            {backgroundColor: theme2.backgroundSeeAllButton},
          ]}>
          <Text style={[styles.textHeader, {color: theme2.primaryTextColor}]}>
            {title}
          </Text>
          {collapsibleItems.includes(section.data[0].sectionId) ? (
            <MaterialIcons
              name="expand-less"
              size={15}
              color={theme2.primaryTextColor}
            />
          ) : (
            <MaterialIcons
              name="expand-more"
              size={15}
              color={theme2.primaryTextColor}
            />
          )}
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SectionList
      ItemSeparatorComponent={flatListSeparator}
      sections={
        itemCourse.section
          ? itemCourse.section.map((data) => {
              return {
                title: data.name,
                data: data.lesson,
              };
            })
          : []
      }
      keyExtractor={(ItemLessonID, index) => ItemLessonID + index}
      renderItem={({item}) => renderListItem(item)}
      renderSectionHeader={({section}) => renderHeader(section)}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => {
        return (
          <Title name={itemCourse.title} subtitle={itemCourse.instructorName} />
        );
      }}
      ListFooterComponent={() => {
        return (
          <View
            style={[
              styles.footer,
              {
                marginBottom: insets.bottom,
                backgroundColor: theme2.themeColor,
              },
            ]}
          />
        );
      }}
      style={{backgroundColor: theme2.themeColor}}
    />
  );
};
const styles = StyleSheet.create({
  footer: {height: 40},
  separator: {
    height: 1,
  },
  textContainer: {
    height: Size.scaleSize(50),
    ...Styles.rowBetween,
  },
  textContent: {
    ...Typography.fontRegular,
  },
  headerTouchable: {
    height: 50,
  },

  headerContainer: {
    height: 50,
    ...Styles.rowBetween,
    marginHorizontal: 20,
  },
  textHeader: {
    fontSize: Typography.fontSize14,
    ...Typography.fontBold,
  },
});
export default LessonList;
