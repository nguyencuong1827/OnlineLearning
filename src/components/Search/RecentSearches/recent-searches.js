import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const RecentSearches = (props) => {
  const [recentSearches, setRecentSearches] = useState([]);
  const {listSearches} = props.route.params;
  useEffect(() => {
    console.log('recent search.js', listSearches);
    if (listSearches.length > 0) {
      setRecentSearches([...recentSearches, ...listSearches]);
    }
    console.log('react-search.js', recentSearches);
  }, []);
  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Icon name="search1" size={18} color="#bdc3c7" />
        <Text style={styles.itemTitle}>
          {'    '}
          {item}
        </Text>
      </View>
    );
  };
  const renderSeparator = () => {
    return <View style={styles.separator} />;
  };
  const clearAllRecentSearches = () => {
    setRecentSearches([]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.recent}>Recent searches</Text>
        <TouchableOpacity onPress={clearAllRecentSearches}>
          <Text style={styles.clear}>Clear</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={recentSearches}
        renderItem={({item}) => renderItem(item)}
        ItemSeparatorComponent={renderSeparator}
        // ListHeaderComponent={searchView}
      />
    </View>
  );
};

export default RecentSearches;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  recent: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  clear: {
    color: '#1565c0',
  },
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#CED0CE',
    alignSelf: 'center',
  },
  item: {
    flexDirection: 'row',
    margin: 10,
    marginLeft: 20,
  },
  itemTitle: {
    fontSize: 18,
  },
});
