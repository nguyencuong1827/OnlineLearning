import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DistanceScale, ScaleSize, Colors} from '../../../globals/styles';

const OptionButtons = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="bookmark-multiple-outline" size={22} />
        </TouchableOpacity>
        <Text>Bookmark</Text>
      </View>

      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="radio-tower" size={22} />
        </TouchableOpacity>
        <Text>Add to channel</Text>
      </View>
      <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="download-outline" size={22} />
        </TouchableOpacity>
        <Text>Download</Text>
      </View>
    </View>
  );
};

export default OptionButtons;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: DistanceScale.spacing_12,
    marginBottom: DistanceScale.spacing_12,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: DistanceScale.spacing_10,
    backgroundColor: Colors.silver,
    borderRadius: 25,
  },
});
