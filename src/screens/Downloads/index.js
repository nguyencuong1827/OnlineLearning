import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {ListCoursesVertical} from '../../components/ListCourses';
import {courses} from '../../globals/fake-data';

const Downloads = (props) => {
  const {navigation} = props;
  const Header = () => {
    return (
      <View style={styles.title}>
        <Text style={styles.downloads}>Downloads</Text>
        <TouchableOpacity onPress={() => Alert.alert('Comming soon!!!')}>
          <Text style={styles.remove}>Remove all</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ListCoursesVertical data={courses} navigation={navigation} />
    </SafeAreaView>
  );
};

export default Downloads;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  title: {
    marginRight: 10,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  downloads: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  remove: {
    color: '#1565c0',
    fontSize: 14,
  },
});
