import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BookmarkContext} from '../../../providers/bookmark-provider';
import EmptyBookmark from '../EmptyBookmark';
import {ListCoursesHorizontal} from '../../ListCourses';
import {BookmarkScreen} from '../../../globals/constants/screen-name';

const BookmarksHorizontal = (props) => {
  const {navigation} = props;
  const {listBookmarks} = useContext(BookmarkContext);
  const showAllBookmarks = () => {
    navigation.navigate(BookmarkScreen, {listBookmarks});
  };

  return (
    <View style={styles.container}>
      {listBookmarks.length === 0 ? (
        <EmptyBookmark />
      ) : (
        <ListCoursesHorizontal
          data={listBookmarks}
          title="Bookmarks"
          navigation={navigation}
          showAll={showAllBookmarks}
        />
      )}
    </View>
  );
};

export default BookmarksHorizontal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: 'white',
    padding: 10,
    height: 200,
  },
});
