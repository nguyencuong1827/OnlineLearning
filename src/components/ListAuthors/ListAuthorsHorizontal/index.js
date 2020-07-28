import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {authors} from '../../../globals/fake-data';
import AuthorElement from './AuthorElement';
import {AuthorDetailScreen} from '../../../globals/constants/screen-name';

const ListAuthorsHorizontal = (props) => {
  const showAuthorDetail = (author) => {
    props.navigation.navigate(AuthorDetailScreen, {authorDetail: author});
  };
  const renderListTopAutor = () => {
    return authors.map((author, index) => (
      <AuthorElement
        key={index}
        author={author}
        showAuthorDetail={() => showAuthorDetail(author)}
      />
    ));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {renderListTopAutor()}
      </ScrollView>
    </View>
  );
};

export default ListAuthorsHorizontal;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    margin: 5,
  },
});
