import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {DistanceScale} from '../../../globals/styles';

const Contacts = () => {
  return (
    <View style={styles.container}>
      <Icon style={styles.icon} name="facebook-square" size={20} />
      <Icon style={styles.icon} name="twitter" size={20} />
      <Icon style={styles.icon} name="linkedin-square" size={20} />
    </View>
  );
};

export default Contacts;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginVertical: DistanceScale.spacing_5,
  },
  icon: {
    marginEnd: DistanceScale.spacing_8,
  },
});
