import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Typography, DistanceScale} from '../../../globals/styles';

const HeaderTitle = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.name}</Text>
    </View>
  );
};

export default HeaderTitle;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginVertical: DistanceScale.spacing_12,
    marginHorizontal: DistanceScale.spacing_12,
  },
  header: {
    color: Colors.black,
    fontSize: Typography.fontSize20,
    fontWeight: Typography.fontWeightBold,
  },
});
