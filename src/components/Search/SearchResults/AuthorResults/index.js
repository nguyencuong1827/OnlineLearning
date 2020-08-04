import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListAuthorsVertical} from '../../../ListAuthors';
import {Typography, DistanceScale} from '../../../../globals/styles';
import {ThemeContext} from '../../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.header = {
    ...styles.header,
    color: theme.colorMainText,
  };
};
const AuthorResults = (props) => {
  const {authorResults} = props.route.params;
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  const renderHeader = () => {
    return (
      <View>
        <Text style={styles.header}>{authorResults.length} results</Text>
      </View>
    );
  };

  return (
    <View>
      <ListAuthorsVertical data={authorResults} renderHeader={renderHeader} />
    </View>
  );
};

export default AuthorResults;
const styles = StyleSheet.create({
  header: {
    fontSize: Typography.fontSize18,
    fontWeight: Typography.fontWeightBold,
    marginBottom: DistanceScale.spacing_10,
  },
});
