import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {ListCoursesVertical} from '../../ListCourses';
import {ThemeContext} from '../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.container = {
    ...styles.container,
    backgroundColor: theme.backgroundColor,
  };
};
const BookmarksVertical = (props) => {
  const {theme} = useContext(ThemeContext);
  const {listBookmarks, navigation} = props.route.params;
  setStyleWithTheme(theme);

  return (
    <View style={styles.container}>
      <ListCoursesVertical data={listBookmarks} navigation={navigation} />
    </View>
  );
};

export default BookmarksVertical;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
