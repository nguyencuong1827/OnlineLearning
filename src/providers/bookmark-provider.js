import React, {useState} from 'react';

export const BookmarkContext = React.createContext();
export const BookmarkProvider = (props) => {
  const [listBookmarks, setListBookmarks] = useState([]);
  return (
    <BookmarkContext.Provider value={{listBookmarks, setListBookmarks}}>
      {props.children}
    </BookmarkContext.Provider>
  );
};
