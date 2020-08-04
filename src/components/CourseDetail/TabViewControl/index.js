import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {DistanceScale} from '../../../globals/styles';
import Lessons from '../Lessons';
import EmptyTranscript from '../Transcript/EmptyTranscript';
import {ThemeContext} from '../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.underLine = {
    ...styles.underLine,
    backgroundColor: theme.colorIconActiveTab,
  };
};

const TabViewControl = (props) => {
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  return (
    <ScrollableTabView
      tabBarActiveTextColor={theme.colorIconActiveTab}
      tabBarInactiveTextColor={theme.colorMainText}
      tabBarUnderlineStyle={styles.underLine}
      style={styles.container}>
      <Lessons
        tabLabel="Content"
        lessons={props.lessons}
        childScroll={props.childScroll}
        isScrollTop={props.isScrollTop}
      />
      <EmptyTranscript tabLabel="Transcript" />
    </ScrollableTabView>
  );
};

export default TabViewControl;

const styles = StyleSheet.create({
  container: {
    height: 600,
    marginTop: DistanceScale.spacing_10,
  },
  underLine: {
    height: 2,
  },
});
