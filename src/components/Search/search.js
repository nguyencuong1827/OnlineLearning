import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Platform} from 'react-native';
import {SearchBar} from 'react-native-elements';
import SearchResults from './SearchResults/search-results';
import RecentSearches from './RecentSearches/recent-searches';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const Search = (props) => {
  const [searchContent, setSearchContent] = useState('');
  const [listSearches, setListSearches] = useState([]);
  const [isShowRealSearch, setIsShowRealSearch] = useState(false);
  const handleChange = (content) => {
    setSearchContent(content);
  };
  const screenOptions = {
    headerShown: false,
  };
  return (
    <View style={styles.container}>
      {isShowRealSearch === false ? (
        <SearchBar
          platform={Platform.OS}
          placeholder="Search"
          value={searchContent}
          showCancel={Platform.OS === 'ios'}
          inputContainerStyle={[
            styles.inputContainer,
            styles.inputContainerFake,
          ]}
          containerStyle={styles.searchContainer}
          onFocus={() => setIsShowRealSearch(true)}
        />
      ) : (
        <SearchBar
          platform={Platform.OS}
          placeholder="Search"
          onChangeText={handleChange}
          value={searchContent}
          showCancel={Platform.OS === 'ios'}
          inputContainerStyle={[
            styles.inputContainer,
            styles.inputContainerReal,
          ]}
          containerStyle={styles.searchContainer}
          onCancel={() => {
            setIsShowRealSearch(false);
            props.navigation.navigate('RecentSearches', {listSearches});
            setListSearches([]);
            setSearchContent('');
            console.log('search.js', listSearches, searchContent);
          }}
          returnKeyType="search"
          onSubmitEditing={() => {
            setListSearches([...listSearches, searchContent]);
            props.navigation.navigate('SearchResults', {searchContent});
            console.log('search.js', listSearches, searchContent);
          }}
        />
      )}

      <View style={styles.separator} />
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName="RecentSearches">
        <Stack.Screen
          name="RecentSearches"
          component={RecentSearches}
          initialParams={{listSearches}}
        />
        <Stack.Screen name="SearchResults" component={SearchResults} />
      </Stack.Navigator>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    borderColor: '#bdc3c7',
    borderBottomWidth: 1,
  },
  cancelButton: {
    color: 'blue',
  },
  searchContainer: {
    backgroundColor: '#fff',
    padding: 15,
  },
  inputContainer: {
    height: 35,
    backgroundColor: '#bdc3c7',
    borderRadius: 10,
  },
  inputContainerFake: {
    marginTop: 40,
    marginBottom: 10,
  },
  inputContainerReal: {
    marginTop: 10,
  },
});
