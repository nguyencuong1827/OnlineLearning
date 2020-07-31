import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Platform} from 'react-native';
import {SearchBar} from 'react-native-elements';
import SearchResults from './SearchResults';
import RecentSearches from './RecentSearches';
import {courses, authors, paths} from '../../globals/fake-data';

const Search = (props) => {
  const [searchContent, setSearchContent] = useState('');
  const [searchContentTemp, setSearchContentTemp] = useState('');
  const [isShowRealSearch, setIsShowRealSearch] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isShowRecentSearch, setIsShowRecentSearch] = useState(true);
  const [courseResults, setCourseReults] = useState([]);
  const [pathResults, setPathReults] = useState([]);
  const [authorResults, setAuthorReults] = useState([]);
  const handleChange = (content) => {
    if (searchContent.length === 1) {
      setIsShowRecentSearch(true);
    }
    setSearchContent(content);
  };
  const clearAllRecentSearches = () => {
    setRecentSearches([]);
  };
  const handleClear = (e) => {
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isExistRecentSearch()) {
      setRecentSearches([...recentSearches, searchContent.toLowerCase()]);
    }
    search();
    setSearchContentTemp(searchContent);
    setIsShowRecentSearch(false);
  };
  const chooseRecentSearch = (content) => {
    setIsShowRecentSearch(false);
    setIsShowRealSearch(true);
    setSearchContent(content);
  };
  const searchFilter = (data) => {
    const ResultsFilter = [];
    data.forEach((item) => {
      const plusString = `${item.name.toUpperCase()} ${
        item.author ? item.author.toUpperCase() : null
      }`;
      if (plusString.search(searchContent.toUpperCase()) > -1) {
        ResultsFilter.push(item);
      }
    });
    return ResultsFilter;
  };
  const search = () => {
    const CourseResultsFilter = searchFilter(courses);
    setCourseReults(CourseResultsFilter);

    const AuthorResultsFilter = searchFilter(authors);
    setAuthorReults(AuthorResultsFilter);

    const PathResultsFilter = searchFilter(paths);
    setPathReults(PathResultsFilter);
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
          onChangeText={(e) => handleChange(e)}
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
          onSubmitEditing={(e) => handleSubmit(e)}
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
        <SearchResults
          searchContent={searchContentTemp}
          courseResults={courseResults}
          authorResults={authorResults}
          pathResults={pathResults}
        />
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
