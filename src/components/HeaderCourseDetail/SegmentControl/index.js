import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {ThemeContext} from '../../../providers/theme-propvider';
import {Typography} from '../../../globals/styles';
const SegmentControl = (props) => {
  const {theme2} = useContext(ThemeContext);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };
  return (
    <View style={styles.container}>
      <SegmentedControlTab
        tabsContainerStyle={styles.tabsContainerStyle}
        tabStyle={[
          styles.tabStyle,
          {
            borderColor: theme2.themeColor,
            backgroundColor: theme2.themeColor,
          },
        ]}
        activeTabStyle={[
          styles.activeTabStyle,
          {
            backgroundColor: theme2.themeColor,
            borderBottomColor: theme2.primaryColor,
          },
        ]}
        tabTextStyle={{
          color: theme2.blackSubTextColor,
          ...Typography.fontBold,
        }}
        activeTabTextStyle={{color: theme2.primaryTextColor}}
        borderRadius={0}
        values={['Contents', 'Transcript']}
        selectedIndex={selectedIndex}
        onTabPress={handleIndexChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  tabsContainerStyle: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 40,
  },
  tabStyle: {
    paddingVertical: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  activeTabStyle: {
    borderBottomWidth: 2,
  },
});

export default SegmentControl;
