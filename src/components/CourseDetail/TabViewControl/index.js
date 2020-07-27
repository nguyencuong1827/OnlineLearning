import React, {useState} from 'react';
import {View, Text, StyleSheet, LayoutAnimation} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {Colors, DistanceScale} from '../../../globals/styles';
import Lessons from '../Lessons';
import Transcript from '../Transcript';
import EmptyTranscript from '../Transcript/EmptyTranscript';

const TabViewControl = (props) => {
  return (
    <ScrollableTabView
      tabBarActiveTextColor={Colors.black}
      tabBarInactiveTextColor={Colors.gray}
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
    marginTop: DistanceScale.spacing_10,
    height: 600,
  },
  underLine: {
    backgroundColor: Colors.blue,
    borderWidth: 0,
    height: 2,
  },
});
