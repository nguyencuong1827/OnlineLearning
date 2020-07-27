import React from 'react';
import {View, ScrollView, StyleSheet, Alert} from 'react-native';
import AuthorElement from './AuthorElement';
import {DistanceScale} from '../../../globals/styles';

const AuthorsOfCourse = (props) => {
  const renderListAuthors = () => {
    return props.authors.map((author, index) => (
      <AuthorElement key={index} author={author} onPress={handleClickAuthor} />
    ));
  };
  const handleClickAuthor = () => {
    Alert.alert('Comming soon');
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {renderListAuthors()}
      </ScrollView>
    </View>
  );
};

export default AuthorsOfCourse;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: DistanceScale.spacing_14,
  },
});
