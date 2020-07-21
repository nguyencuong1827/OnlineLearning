import React from 'react';
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Separator from '../../../components/Separator';
import LessonItem from './LessonItem';
import {
  Colors,
  DistanceScale,
  Typography,
  ScaleSize,
} from '../../../globals/styles';

const ProgressLesson = (props) => {
  return (
    <View style={styles.progressLesson}>
      <Text>{props.index}</Text>
    </View>
  );
};

const renderSectionHeader = (title, hour, index) => {
  return (
    <View style={styles.header}>
      <Separator />
      <TouchableOpacity style={styles.touchHeader}>
        <ProgressLesson index={index} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.hour}>{hour}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const Lessons = (props) => {
  const {lessons} = props;
  return (
    <View style={styles.container}>
      <SectionList
        onScrollEndDrag={(event) => props.isScrollTop(event)}
        scrollEnabled={props.childScroll}
        nestedScrollEnabled
        sections={lessons}
        renderItem={({item}) => (
          <LessonItem isCheck={item.isCheck} subTitle={item.subTitle} />
        )}
        renderSectionHeader={({section}) =>
          renderSectionHeader(
            section.title,
            section.hour,
            lessons.indexOf(section) + 1,
          )
        }
        keyExtractor={(item, index) => item + index}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={true}
      />
    </View>
  );
};

export default Lessons;
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white95,
  },
  header: {
    backgroundColor: Colors.white95,
  },
  touchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: DistanceScale.spacing_14,
  },
  index: {
    marginRight: DistanceScale.spacing_12,
  },
  title: {
    color: Colors.black,
    fontSize: Typography.fontSize16,
  },
  hour: {
    color: Colors.gray,
    fontSize: Typography.fontSize14,
  },
  progressLesson: {
    height: ScaleSize.scaleSizeWidth(20),
    width: ScaleSize.scaleSizeWidth(20),
    marginRight: DistanceScale.spacing_12,
    borderRadius: 12.5,
    borderColor: Colors.green,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
