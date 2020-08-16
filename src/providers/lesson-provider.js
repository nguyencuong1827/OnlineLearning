import React, {useState} from 'react';

const LessonContext = React.createContext();

const LessonProvider = (props) => {
  const [itemCourse, setItemCourse] = useState({});
  const [itemLesson, setItemLesson] = useState({});
  const [time, setTime] = useState(0);
  const [videoUrl, setVideoUrl] = useState('');
  return (
    <LessonContext.Provider
      value={{
        itemCourse,
        setItemCourse,
        itemLesson,
        setItemLesson,
        time,
        setTime,
      }}>
      {props.children}
    </LessonContext.Provider>
  );
};

export {LessonProvider, LessonContext};
