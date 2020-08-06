import React, {useState, useContext} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {SearchBar} from 'react-native-elements';
import SearchResults from '../../components/Search/SearchResults';
import RecentSearches from '../../components/Search/RecentSearches';
import {ThemeContext} from '../../providers/theme-propvider';
import {courses, authors, paths} from '../../globals/fake-data';
import {Typography, Colors} from '../../globals/styles';

const setStyleWithTheme = (theme) => {
  styles.searchContainer = {
    ...styles.searchContainer,
    backgroundColor: theme.headerFooterBackground,
  };
  styles.container = {
    ...styles.container,
    backgroundColor: theme.backgroundColor,
  };
  styles.inputContainer = {
    ...styles.inputContainer,
    backgroundColor: theme.searchBarBackground,
  };
  styles.inputStyle = {...styles.inputStyle, color: theme.colorMainText};
  // styles.email = {...styles.email, color: theme.colorSubText};
};

const Search = (props) => {
  const {theme} = useContext(ThemeContext);
  const [searchContent, setSearchContent] = useState('');
  const [searchContentTemp, setSearchContentTemp] = useState('');
  const [isShowRealSearch, setIsShowRealSearch] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isShowRecentSearch, setIsShowRecentSearch] = useState(true);
  const [courseResults, setCourseReults] = useState([]);
  const [pathResults, setPathReults] = useState([]);
  const [authorResults, setAuthorReults] = useState([]);

  setStyleWithTheme(theme);

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
  };

  const handleCancel = () => {
    setSearchContent('');
    setIsShowRealSearch(false);
    setIsShowRecentSearch(true);
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
    await search();
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
        item.author ? item.author.toUpperCase() : ''
      } ${item.skills ? item.skills.toUpperCase() : ''} ${
        item.paths ? item.paths.toUpperCase() : ''
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

    const PathResultsFilter = searchFilter(paths);
    setPathReults(PathResultsFilter);

    const AuthorResultsFilter = searchFilter(authors);
    setAuthorReults(AuthorResultsFilter);
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
          text
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
          inputStyle={styles.inputStyle}
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
    padding: 15,
    color: 'red',
  },
  inputContainer: {
    height: 35,
    borderRadius: 10,
    color: 'red',
  },
  inputStyle: {
    fontSize: Typography.fontSize16,
  },
  inputContainerFake: {
    marginTop: 40,
    marginBottom: 10,
  },
  inputContainerReal: {
    marginTop: 10,
  },
});
