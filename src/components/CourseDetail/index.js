import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  SectionList,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import VideoPlayer from './VideoPlayer';
import {ScaleSize} from '../../globals/styles';
import HeaderTitle from './HeaderTitle';
import AuthorsOfCourse from './Authors';
import {courseDetail, lessons} from '../../globals/fake-data';
import {Colors} from '../../globals/styles';
import InfoCourse from './Info';
import OptionButtons from './OptionButtons';
import Separator from '../../components/Separator';
import Description from './Description';
import RelateCoursesAndPaths from './Relate';
import LearningCheck from './LearningCheck';
import TabViewControl from './TabViewControl';

const CourseDetail = (props) => {
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
  return (
    <View style={styles.container}>
      <VideoPlayer />
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
      {/* <SectionList
        sections={lessons}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section}) =>
          renderSectionHeader(section.title, section.hour, 1111)
        }
        renderItem={({item}) => (
          <LessonItem subTitle={item.subTitle} isCheck={item.isCheck} />
        )}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={true}
      /> */}
    </View>
  );
};

export default CourseDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  sectionHeader: {
    backgroundColor: 'skyblue',
  },
});
