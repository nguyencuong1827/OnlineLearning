import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../../globals/styles';

const Transcript = () => {
  return (
    <View style={styles.container}>
      <Text>Transcript tab</Text>
    </View>
  );
};

export default Transcript;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white95,
  },
});
