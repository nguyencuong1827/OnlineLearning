import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {ListCoursesVertical} from '../../../ListCourses';
import {ListAuthorsVertical} from '../../../ListAuthors';
import {Typography, Distance} from '../../../../globals/styles';
import {ThemeContext} from '../../../../providers/theme-propvider';
import Separator from '../../../Separator';
import {SearchContext} from '../../../../providers/search-provider';

const setStyleWithTheme = (theme) => {
  styles.header = {
    ...styles.header,
    color: theme.colorMainText,
  };
  styles.result = {
    ...styles.result,
    color: theme.colorMainText,
  };
};

const AllResult = (props) => {
  const {navigation} = props;
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  const {listCourseResult, listAuthorResult} = useContext(SearchContext);

  const showAll = (screenName) => {
    props.navigation.navigate(screenName);
  };

  const renderHeader = (content, result) => {
    return (
      <TouchableOpacity
        style={styles.containerHeader}
        onPress={() => showAll(content)}>
        <Text style={styles.header}>{content}</Text>
        <Text style={styles.result}>
          {result} results {'>'}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView>
      {listCourseResult !== 0 ? (
        <ListCoursesVertical
          data={listCourseResult}
          renderHeader={renderHeader('Courses', listCourseResult.length)}
          navigation={navigation}
        />
      ) : null}
      {listAuthorResult.length !== 0 ? (
        <View>
          <Separator />
          <ListAuthorsVertical
            data={listAuthorResult}
            renderHeader={renderHeader('Authors', listAuthorResult.length)}
            navigation={navigation}
          />
        </View>
      ) : null}
    </ScrollView>
  );
};

export default AllResult;
const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    marginBottom: Distance.spacing_10,
  },
  result: {
    fontSize: Typography.fontSize16,
  },
});
