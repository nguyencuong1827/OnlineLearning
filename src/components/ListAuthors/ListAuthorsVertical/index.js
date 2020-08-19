import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Separator from '../../Separator';
import AuthorElement from './AuthorElement';
import {ScaleSize, Distance} from '../../../globals/styles';
import {AuthorDetailScreen} from '../../../globals/constants/screen-name';

const ListAuthorsVertical = (props) => {
  const {navigation, data, renderHeader} = props;
  const showAuthorDetail = (author) => {
    props.navigation.navigate(AuthorDetailScreen, {id: author.id});
  };
  const renderItem = (item) => {
    return (
      <AuthorElement
        name={item.name || item['user.name']}
        point={item['user.point']}
        urlAvatar={item['user.avatar'] || item.avatar}
        navigation={navigation}
        showAuthorDetail={() => showAuthorDetail(item)}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => renderItem(item)}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader}
        getItemLayout={(data, index) => ({
          length: ScaleSize.scaleSizeWidth(65),
          offset: ScaleSize.scaleSizeWidth(65) * index,
          index,
        })}
      />
    </View>
  );
};

export default ListAuthorsVertical;
const styles = StyleSheet.create({
  container: {
    margin: Distance.spacing_10,
  },
});
