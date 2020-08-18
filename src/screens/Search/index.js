/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext, useEffect} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {ThemeContext} from '../../providers/theme-propvider';
import {Typography} from '../../globals/styles';
import axiosClient from '../../api/axiosClient';
import SearchPage from '../../components/Search';
import {SearchContext} from '../../providers/search-provider';

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
  const [keyword, setKeywork] = useState('');
  const [isShowRealSearch, setIsShowRealSearch] = useState(false);

  let listAuhthorTemp = [];
  const {
    searchContent,
    listSearch,
    setListSearch,
    listAllAuthor,
    setListAllAuthor,
    setListCourseResult,
    setListAuthorResult,
    setSearchContent,
  } = useContext(SearchContext);

  setStyleWithTheme(theme);

  const handleChange = (content) => {
    if (content === 1) {
      setSearchContent('');
    }
    setKeywork(content);
  };

  const handleClear = (e) => {
    setKeywork('');
    setSearchContent('');
  };

  const handleCancel = () => {
    setKeywork('');
    setIsShowRealSearch(false);
    setSearchContent('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setListSearch([...listSearch, keyword]);
    await search();
    setSearchContent(keyword);
  };

  const searchCourse = async () => {
    try {
      const response = await axiosClient.post('/course/search', {
        keyword: keyword,
        opt: {},
        limit: 10,
        offset: 0,
      });
      if (response.status === 200) {
        await searchAuthorFromCourse(response.data.payload.rows);
        return response.data.payload.rows;
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchAuthorFromCourse = async (listCourse) => {
    for (let i = 0; i < listCourse.length; i++) {
      const result = await searchAuthor(listCourse[i].name);
      if (result !== null) {
        listAuhthorTemp.push(result);
      }
    }
    setListAuthorResult(listAuhthorTemp);
    listAuhthorTemp = [];
  };

  const searchAuthor = (name) => {
    let isExist = listAuhthorTemp.find(
      (author) => author['user.name'] === name,
    );
    if (isExist === undefined) {
      isExist = listAllAuthor.find((author) => author['user.name'] === name);
      return isExist;
    }
    return null;
  };

  const getListAuthor = async () => {
    const url = '/instructor';
    try {
      const response = await axiosClient.get(url);
      if (response.status === 200) {
        setListAllAuthor(response.data.payload);
      } else {
        console.log(response.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getListAuthor();
  }, []);

  useEffect(() => {
    if (keyword === '') {
      setKeywork(searchContent);
    }
  }, [searchContent]);

  const search = async () => {
    const courses = await searchCourse();
    setListCourseResult(courses);
  };

  return (
    <View style={styles.container}>
      {isShowRealSearch === false ? (
        <SearchBar
          platform={Platform.OS}
          placeholder="Search"
          value={keyword}
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
          value={keyword}
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
      {/* {isShowRecentSearch === true ? (
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
        />
      )} */}
      <SearchPage />
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
