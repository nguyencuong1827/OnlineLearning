/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useContext, useEffect} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {ThemeContext} from '../../providers/theme-propvider';
import {Typography, Colors} from '../../globals/styles';
import axiosClient from '../../api/axiosClient';
import SearchPage from '../../components/Search';
import {SearchContext} from '../../providers/search-provider';
import {LanguageContext} from '../../providers/language-provider';
import {useAsyncStorage} from '@react-native-community/async-storage';

const setStyleWithTheme = (theme) => {
  styles.searchContainer = {
    ...styles.searchContainer,
    backgroundColor: theme.headerFooterBackground,
  };
  styles.container = {
    ...styles.container,
    backgroundColor: theme.backgroundColor,
  };
  styles.inputStyle = {...styles.inputStyle, color: theme.colorMainText};
  // styles.email = {...styles.email, color: theme.colorSubText};
};

const Search = (props) => {
  const {theme} = useContext(ThemeContext);
  const [keyword, setKeyword] = useState('');
  const [isShowRealSearch, setIsShowRealSearch] = useState(false);
  const {language} = useContext(LanguageContext);

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

  const {setItem, getItem, removeItem} = useAsyncStorage('@listSearch');

  setStyleWithTheme(theme);

  const handleChange = (content) => {
    if (content === 1) {
      setSearchContent('');
    }
    setKeyword(content);
  };

  const handleClear = async () => {
    try {
      await removeItem();
    } catch (error) {
      console.log(error);
    }
    setKeyword('');
    setSearchContent('');
  };

  const handleCancel = () => {
    setKeyword('');
    setIsShowRealSearch(false);
    setSearchContent('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fResult = listSearch.find(
      (item) => item.toLowerCase() === keyword.toLowerCase(),
    );
    if (!fResult) {
      setListSearch([...listSearch, keyword]);
      storeListSearch([...listSearch, keyword]);
    }
    await search(keyword);
    setSearchContent(keyword);
  };

  const searchCourse = async (content) => {
    try {
      const response = await axiosClient.post('/course/search', {
        keyword: content,
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

  const storeListSearch = async (value) => {
    // console.log('value store: ', value);
    try {
      const jsonValue = JSON.stringify({listSearch: value});
      await setItem(jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const getListSearch = async () => {
    try {
      const item = await getItem();
      if (item !== null) {
        const jsonValue = JSON.parse(item);
        // console.log(jsonValue.listSearch);
        setListSearch(jsonValue.listSearch);
      }
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    getListSearch();
    getListAuthor();
  }, []);

  useEffect(() => {
    if (keyword === '' && searchContent !== '') {
      setKeyword(searchContent);
      search(searchContent);
    }
  }, [searchContent]);

  const search = async (content) => {
    const courses = await searchCourse(content);
    setListCourseResult(courses);
  };

  return (
    <View style={styles.container}>
      {isShowRealSearch === false ? (
        <SearchBar
          platform={Platform.OS}
          placeholder={language === 'eng' ? 'Search' : 'Tìm kiếm'}
          value={keyword}
          showCancel={Platform.OS === 'ios'}
          inputContainerStyle={[
            styles.inputContainer,
            styles.inputContainerFake,
          ]}
          inputStyle={styles.inputStyle}
          containerStyle={styles.searchContainer}
          onFocus={() => setIsShowRealSearch(true)}
        />
      ) : (
        <SearchBar
          platform={Platform.OS}
          placeholder={language === 'eng' ? 'Search' : 'Tìm kiếm'}
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
    backgroundColor: Colors.grayBold,
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
