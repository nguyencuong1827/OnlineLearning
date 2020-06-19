import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Platform} from 'react-native';
import {SearchBar} from 'react-native-elements';
import SearchResults from './SearchResults/search-results';
import {courses, authors, paths} from '../../../globals/fake-data';

const Search = (props) => {
  const [searchContent, setSearchContent] = useState('');
  const [courseResults, setCourseReults] = useState([]);
  const [pathResults, setPathReults] = useState([]);
  const [authorResults, setAuthorReults] = useState([]);
  const [isShowRealSearch, setIsShowRealSearch] = useState(false);
  const [isShowResults, setIsShowReaResults] = useState(false);
  const handleChange = (content) => {
    setSearchContent(content);
  };
  const searchFilter = () => {
    const CourseResults = courses.filter((course) => {
      const plusString = `${course.title.toUpperCase()} ${course.author.toUpperCase()}`;
      return plusString.search(searchContent.toUpperCase()) > -1;
    });

    setCourseReults(CourseResults);
    const AuthorResults = authors.filter((author) => {
      const authorNameUpperCase = author.name.toUpperCase();
      return authorNameUpperCase.search(searchContent.toUpperCase()) > -1;
    });
    setCourseReults(AuthorResults);

    const PathResults = courses.filter((path) => {
      const pathTitleUpperCase = path.title.toUpperCase();
      return pathTitleUpperCase.search(searchContent.toUpperCase()) > -1;
    });
    setCourseReults(PathResults);
    setIsShowReaResults(true);
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
          onCancel={() => setIsShowRealSearch(false)}
          returnKeyType="search"
          onSubmitEditing={searchFilter}
        />
      )}

      <View style={styles.separator} />
      {isShowResults === true ? (
        <SearchResults
          searchContent={searchContent}
          courseResults={courseResults}
          authorResults={authorResults}
          pathResults={pathResults}
        />
      ) : null}
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
