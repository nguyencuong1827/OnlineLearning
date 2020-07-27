import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Share} from 'react-native';
import VideoPlayer from '../../components/CourseDetail/VideoPlayer';
import HeaderTitle from '../../components/CourseDetail/HeaderTitle';
import {courseDetail, lessons} from '../../globals/fake-data';
import AuthorsOfCourse from '../../components/CourseDetail/Authors';
import InfoCourse from '../../components/CourseDetail/Info';
import OptionButtons from '../../components/CourseDetail/OptionButtons';
import Separator from '../../components/Separator';
import Description from '../../components/CourseDetail/Description';
import RelateCoursesAndPaths from '../../components/CourseDetail/Relate';
import LearningCheck from '../../components/CourseDetail/LearningCheck';
import TabViewControl from '../../components/CourseDetail/TabViewControl';
import {Colors} from '../../globals/styles';

const CourseDetail = (props) => {
  const {navigation} = props;
  const [parentScroll, setParentScroll] = useState(true);
  const [childScroll, setChildScroll] = useState(false);
  const isScrollEnd = (event) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    const heightLayout = event.nativeEvent.layoutMeasurement.height;
    const heightContent = event.nativeEvent.contentSize.height;
    if (contentOffsetY + heightLayout >= heightContent - 1) {
      setParentScroll(false);
      setChildScroll(true);
    } else {
      setParentScroll(true);
      setChildScroll(false);
    }
  };
  const isScrollTop = (event) => {
    const contentOffsetY = event.nativeEvent.contentOffset.y;
    if (contentOffsetY === 0) {
      setParentScroll(true);
      setChildScroll(false);
    } else {
      setParentScroll(false);
      setChildScroll(true);
    }
  };
  const closeCourseDetail = () => {
    navigation.goBack();
  };
  const shareCourseDetail = async () => {
    try {
      const result = await Share.share({
        title: 'Share course',
        message: 'This course is helpful',
        url: 'https://reactjs.org/logo-og.png',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <VideoPlayer
        closeCourseDetail={closeCourseDetail}
        shareCourseDetail={shareCourseDetail}
      />
      <ScrollView
        scrollEnabled={parentScroll}
        onScrollEndDrag={(event) => isScrollEnd(event)}>
        <View>
          <HeaderTitle name={courseDetail.name} />
          <AuthorsOfCourse authors={courseDetail.authors} />
          <InfoCourse
            level={courseDetail.level}
            releasedDate={courseDetail.releasedDate}
            duration={courseDetail.duration}
            averageRating={courseDetail.averageRating}
            totalRating={courseDetail.totalRating}
          />
          <OptionButtons />
          <Separator />
          <Description description={courseDetail.description} />
          <RelateCoursesAndPaths />
          <LearningCheck />
        </View>

        <View>
          <TabViewControl
            lessons={lessons}
            childScroll={childScroll}
            isScrollTop={isScrollTop}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CourseDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
