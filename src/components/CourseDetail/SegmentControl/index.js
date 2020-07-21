import React, {useState} from 'react';
import {View, Text, StyleSheet, LayoutAnimation} from 'react-native';
import SegmentControlTab from 'react-native-segmented-control-tab';
import {Colors, DistanceScale} from '../../../globals/styles';
import Lessons from '../Lessons';

const SegmentControl = (props) => {
  return (
    <View style={styles.container}>
      <SegmentControlTab
        values={['Contents', 'Transcript']}
        tabStyle={styles.tabStyle}
        activeTabStyle={styles.activeTabStyle}
        tabTextStyle={styles.tabTextStyle}
        activeTabTextStyle={styles.activeTabTextStyle}
        borderRadius={0}
        selectedIndex={props.selectedSegmentTab}
        onTabPress={props.onPressSegmentControl}
      />
    </View>
  );
};

export default SegmentControl;

const styles = StyleSheet.create({
  container: {
    marginTop: DistanceScale.spacing_12,
  },
  tabStyle: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  activeTabStyle: {
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderBottomColor: Colors.blue,
  },
  tabTextStyle: {
    color: Colors.black,
  },
  activeTabTextStyle: {
    color: Colors.black,
  },
});
