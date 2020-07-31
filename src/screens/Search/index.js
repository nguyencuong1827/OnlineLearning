import React, {useState} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {SearchBar} from 'react-native-elements';
import SearchResults from '../../components/Search/SearchResults';
import RecentSearches from '../../components/Search/RecentSearches';

const Search = (props) => {
  const [searchContent, setSearchContent] = useState('');
  const [isShowRealSearch, setIsShowRealSearch] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isShowRecentSearch, setIsShowRecentSearch] = useState(true);
  const handleChange = (content) => {
    setSearchContent(content);
  };
  const clearAllRecentSearches = () => {
    setRecentSearches([]);
  };
  const handleClear = () => {
    setSearchContent('');
    setIsShowRecentSearch(true);
    console.log('clear', searchContent);
  };
  const handleCancel = () => {
    setSearchContent('');
    setIsShowRealSearch(false);
    setIsShowRecentSearch(true);
    console.log('cancel', searchContent);
  };
  const isExistRecentSearch = () => {
    const temp = recentSearches.find(
      (contentSearch) => contentSearch === searchContent.toLowerCase(),
    );
    return temp ? true : false;
  };
  const handleEditing = () => {
    if (!isExistRecentSearch()) {
      setRecentSearches([...recentSearches, searchContent.toLowerCase()]);
    }
    setIsShowRecentSearch(false);
  };
  const chooseRecentSearch = (content) => {
    setIsShowRecentSearch(false);
    setIsShowRealSearch(true);
    setSearchContent(content);
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
          onCancel={handleCancel}
          onClear={handleClear}
          returnKeyType="search"
          onSubmitEditing={handleEditing}
        />
      )}
      <View style={styles.separator} />
      {isShowRecentSearch === true ? (
        <RecentSearches
          recentSearches={recentSearches}
          clearAllRecentSearches={clearAllRecentSearches}
          chooseRecentSearch={chooseRecentSearch}
        />
      ) : (
        <SearchResults searchContent={searchContent} />
      )}
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
