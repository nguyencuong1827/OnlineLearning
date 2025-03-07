import React, {useContext} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import AuthorElement from './AuthorElement';
import {AuthorDetailScreen} from '../../../globals/constants/screen-name';
import {Distance, Typography} from '../../../globals/styles';
import {ThemeContext} from '../../../providers/theme-propvider';

const setStyleWithTheme = (theme) => {
  styles.title = {...styles.title, color: theme.colorMainText};
};

const ListAuthorsHorizontal = (props) => {
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);

  const {data} = props;
  const showAuthorDetail = (author) => {
    props.navigation.navigate(AuthorDetailScreen, {id: author.id});
  };

  const renderListTopAutor = () => {
    return data.map((author, index) => (
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
    margin: Distance.spacing_12,
  },
  title: {
    margin: Distance.spacing_5,
    fontWeight: Typography.fontWeightBold,
    fontSize: Typography.fontSize18,
  },
});
