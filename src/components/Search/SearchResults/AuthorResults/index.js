import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListAuthorsVertical} from '../../../ListAuthors';
import {Typography, Distance} from '../../../../globals/styles';
import {ThemeContext} from '../../../../providers/theme-propvider';
import {SearchContext} from '../../../../providers/search-provider';

const setStyleWithTheme = (theme) => {
  styles.header = {
    ...styles.header,
    color: theme.colorMainText,
  };
};
const AuthorResults = (props) => {
  const {navigation} = props;
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  const {listAuthorResult} = useContext(SearchContext);
  const renderHeader = () => {
    return (
      <View>
        <Text style={styles.header}>{listAuthorResult.length} results</Text>
      </View>
    );
  };

  return (
    <View>
      <ListAuthorsVertical
        data={listAuthorResult}
        renderHeader={renderHeader}
        navigation={navigation}
      />
    </View>
  );
};

export default AuthorResults;
const styles = StyleSheet.create({
  header: {
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    marginBottom: Distance.spacing_10,
  },
});
