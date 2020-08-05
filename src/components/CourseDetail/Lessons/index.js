import React, {useContext} from 'react';
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
import {ThemeContext} from '../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.header = {
    ...styles.header,
    backgroundColor: theme.backgroundColor,
  };
  styles.title = {...styles.title, color: theme.colorMainText};
  styles.hour = {...styles.hour, color: theme.colorSubText};
};

const ProgressLesson = (props) => {
  return (
    <View style={styles.progressLesson}>
      <Text style={styles.title}>{props.index}</Text>
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
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

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
    flex: 1,
  },
  header: {
    padding: DistanceScale.spacing_5,
  },
  touchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: DistanceScale.spacing_8,
  },
  index: {
    fontSize: Typography.fontSize14,
  },
  title: {
    fontSize: Typography.fontSize16,
  },
  hour: {
    fontSize: Typography.fontSize14,
  },
  progressLesson: {
    justifyContent: 'center',
    alignItems: 'center',
    height: ScaleSize.scaleSizeWidth(18),
    width: ScaleSize.scaleSizeWidth(18),
    marginRight: DistanceScale.spacing_12,
    borderRadius: 12.5,
    borderColor: Colors.green,
    borderWidth: 1,
  },
});
