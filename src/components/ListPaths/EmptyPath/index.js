import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const EmptyPath = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My paths</Text>
      <View style={styles.content}>
        <Icon name="vibration" size={40} color="gray" />
        <Text style={styles.textCenter}>
          Path will guide you in learning a specific skill or teachnology
        </Text>
        <TouchableOpacity onPress={() => Alert.alert('Comming soon!')}>
          <Text style={styles.viewAllPath}>View all paths</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmptyPath;

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
  content: {
    fontSize: 11,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 200,
    backgroundColor: '#fafafa',
  },
  textCenter: {
    textAlign: 'center',
  },
  viewAllPath: {
    color: '#1565c0',
  },
});
