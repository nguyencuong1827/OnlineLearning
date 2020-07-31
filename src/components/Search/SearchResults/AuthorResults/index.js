import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListAuthorsVertical} from '../../../ListAuthors';
import {Typography, DistanceScale} from '../../../../globals/styles';
const AuthorResults = (props) => {
  const {authorResults} = props.route.params;
  console.log(props.route);
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
    fontSize: Typography.fontSize16,
    fontWeight: Typography.fontWeightBold,
    marginBottom: DistanceScale.spacing_10,
  },
});
