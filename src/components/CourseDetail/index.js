import React from 'react';
import {View, StyleSheet} from 'react-native';
import VideoPlayer from './VideoPlayer';
import {ScaleSize} from '../../globals/styles';
import HeaderTitle from './HeaderTitle';
import AuthorsOfCourse from './Authors';
import {courseDetail} from '../../globals/fake-data';
import {Colors} from '../../globals/styles';
import InfoCourse from './Info';
import OptionButtons from './OptionButtons';
import Separator from '../Separator';
import Description from './Description';
import RelateCoursesAndPaths from './Relate';
import LearningCheck from './LearningCheck';

const CourseDetail = (props) => {
  return (
    <View style={styles.container}>
      <VideoPlayer />
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
  );
};

export default CourseDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: ScaleSize.HEIGHT,
    backgroundColor: Colors.white,
  },
});
