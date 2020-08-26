import React, {useState} from 'react';

const CategoryContext = React.createContext();

const CategoryProvider = (props) => {
  const [listCategory, setListCategory] = useState([]);
  const [listCourseLike, setListCourseLike] = useState([]);
  return (
    <CategoryContext.Provider
      value={{
        listCategory,
        setListCategory,
        listCourseLike,
        setListCourseLike,
      }}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export {CategoryProvider, CategoryContext};
