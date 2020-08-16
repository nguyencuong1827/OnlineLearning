import React, {useState, useContext} from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {Typography} from '../../../globals/styles';
import {ThemeContext} from '../../../providers/theme-propvider';
const Description = (props) => {
  const [isExpand, setExpand] = useState(true);
  const {theme2} = useContext(ThemeContext);
  const onPress = () => {
    if (isExpand) {
      setExpand(false);
    } else {
      setExpand(true);
    }
  };
  const renderIcon = () => {
    if (isExpand) {
      return (
        <Ionicons
          name="ios-arrow-down"
          size={15}
          color={theme2.primaryTextColor}
        />
      );
    } else {
      return (
        <Ionicons
          name="ios-arrow-up"
          size={15}
          color={theme2.primaryTextColor}
        />
      );
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.textContainer,
          isExpand ? styles.maxHeightText : styles.minHeightText,
        ]}>
        <Text style={[styles.text, {color: theme2.blackSubTextColor}]}>
          {props.description}
        </Text>
      </View>
      <View
        style={[
          styles.buttonContainer,
          {backgroundColor: theme2.backgroundSeeAllButton},
        ]}>
        <TouchableHighlight
          style={[
            styles.buttonContainer,
            {backgroundColor: theme2.backgroundSeeAllButton},
          ]}
          onPress={onPress}
          underlayColor={theme2.backgroundSeeAllButton}>
          {renderIcon()}
        </TouchableHighlight>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 25,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    width: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 10,
  },
  textContainer: {
    marginRight: 20,
  },
  minHeightText: {
    height: null,
  },
  maxHeightText: {
    height: 80,
  },
  text: {
    ...Typography.fontRegular,
  },
});
export default Description;
