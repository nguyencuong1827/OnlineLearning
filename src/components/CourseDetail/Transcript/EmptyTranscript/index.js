import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Typography} from '../../../../globals/styles';
import {fontSize20} from '../../../../globals/styles/typography';

const Transcript = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upgrade Subscription</Text>
      <Text style={styles.subTitle}>
        Your current plan doesn't allow access to this feature
      </Text>
    </View>
  );
};

export default Transcript;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white95,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.gray,
    fontWeight: Typography.fontWeightBold,
    fontSize: Typography.fontSize20,
  },
  subTitle: {
    color: Colors.gray,
    fontSize: Typography.fontSize16,
  },
});
