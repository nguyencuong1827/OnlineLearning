import React, {useState} from 'react';

const SearchContext = React.createContext();

const SearchProvider = (props) => {
  const [searchContent, setSearchContent] = useState('');
  const [listSearch, setListSearch] = useState([]);
  const [listAllAuthor, setListAllAuthor] = useState([]);
  const [listCourseResult, setListCourseResult] = useState([]);
  const [listAuthorResult, setListAuthorResult] = useState([]);
  return (
    <SearchContext.Provider
      value={{
        listSearch,
        setListSearch,
        searchContent,
        setSearchContent,
        listAllAuthor,
        setListAllAuthor,
        listCourseResult,
        setListCourseResult,
        listAuthorResult,
        setListAuthorResult,
      }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export {SearchProvider, SearchContext};
