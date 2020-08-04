import React, {useContext} from 'react';
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
import {ThemeContext} from '../../providers/theme-propvider';
import {DistanceScale, Typography} from '../../globals/styles';

const setStyleWithTheme = (theme) => {
  styles.container = {
    ...styles.container,
    backgroundColor: theme.backgroundColor,
  };
  styles.downloads = {...styles.downloads, color: theme.colorMainText};
  styles.remove = {...styles.remove, color: theme.colorIconActiveTab};
};

const Downloads = (props) => {
  const {navigation} = props;
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

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
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: DistanceScale.spacing_10,
    marginTop: DistanceScale.spacing_5,
  },
  downloads: {
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
  },
  remove: {
    fontSize: Typography.fontSize14,
  },
});
