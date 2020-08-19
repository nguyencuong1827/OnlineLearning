/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Separator from '../../Separator';
import {Typography, Distance} from '../../../globals/styles';
import {ThemeContext} from '../../../providers/theme-propvider';
import {SearchContext} from '../../../providers/search-provider';

const setStyleWithTheme = (theme) => {
  styles.container = {
    ...styles.container,
    backgroundColor: theme.backgroundColor,
  };
  styles.recent = {
    ...styles.recent,
    color: theme.colorMainText,
  };
  styles.clear = {
    ...styles.clear,
    color: theme.colorIconActiveTab,
  };
  styles.itemTitle = {
    ...styles.itemTitle,
    color: theme.colorMainText,
  };
};

const RecentSearches = (props) => {
  const {theme} = useContext(ThemeContext);
  setStyleWithTheme(theme);
  const {navigation} = props;
  const {
    listSearch,
    searchContent,
    setListSearch,
    setSearchContent,
  } = useContext(SearchContext);

  const clearListSearch = () => {
    setListSearch([]);
  };
  const chooseRecentSearch = (item) => {
    setSearchContent(item);
  };
  useEffect(() => {
    // let timer;
    // if (searchContent !== '') {
    //   timer = setTimeout(() => {
    //     navigation.navigate('ResultSearchScreen');
    //   }, 2000);
    // }
    // return () => clearTimeout(timer);
    navigation.navigate('ResultSearchScreen');
  }, [searchContent]);

  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => chooseRecentSearch(item)}>
        <Icon
          name="search1"
          size={Typography.fontSize18}
          color={theme.colorMainText}
        />
        <Text style={styles.itemTitle}>
          {'    '}
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.recent}>Recent searches</Text>
        <TouchableOpacity onPress={clearListSearch}>
          <Text style={styles.clear}>Clear</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={listSearch}
        renderItem={({item}) => renderItem(item)}
        ItemSeparatorComponent={() => <Separator />}
        // ListHeaderComponent={searchView}
      />
    </View>
  );
};

export default RecentSearches;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: Distance.spacing_10,
  },
  recent: {
    fontWeight: Typography.fontWeightBold,
    fontSize: Typography.fontSize18,
  },
  clear: {
    fontSize: Typography.fontSize16,
  },
  item: {
    flexDirection: 'row',
    margin: Distance.spacing_10,
    marginLeft: Distance.spacing_20,
  },
  itemTitle: {
    fontSize: Typography.fontSize18,
  },
});
