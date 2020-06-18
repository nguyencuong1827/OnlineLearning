import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Platform} from 'react-native';
import {SearchBar} from 'react-native-elements';
import SearchResults from './SearchResults/search-results';

const Search = (props) => {
  const [searchContent, setSearchContent] = useState('');
  const [isShow, setIsShow] = useState(true);
  const handleChange = (content) => {
    setSearchContent(content);
  };
  return (
    <View style={styles.container}>
      {isShow === true ? (
        <SearchBar
          platform={Platform.OS}
          placeholder="Search"
          onChangeText={handleChange}
          value={searchContent}
          showCancel={Platform.OS === 'ios'}
          inputContainerStyle={styles.inputContainer}
          containerStyle={styles.searchContainer}
          onFocus={() => setIsShow(false)}
        />
      ) : null}

      <View style={styles.separator} />
      <SearchResults />
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
    marginTop: 20,
    marginBottom: 10,
    height: 35,
    backgroundColor: '#bdc3c7',
    borderRadius: 10,
  },
});
