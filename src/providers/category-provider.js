import React, {useState} from 'react';

const CategoryContext = React.createContext();

const CategoryProvider = (props) => {
  const [listCategory, setListCategory] = useState([]);
  return (
    <CategoryContext.Provider
      value={{
        listCategory,
        setListCategory,
      }}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export {CategoryProvider, CategoryContext};
