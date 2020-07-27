import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EmptyChannel = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Channels</Text>
      <View style={styles.content}>
        <Icon name="wifi-tethering" size={40} color="gray" />
        <Text style={styles.message}>
          Use channels to save, organize, and share content to acconplish your
          learning objectives
        </Text>
      </View>
    </View>
  );
};

export default EmptyChannel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    textAlign: 'center',
  },
  content: {
    fontSize: 11,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    padding: 10,
    height: 200,
  },
});
