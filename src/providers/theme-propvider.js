import React, {useState} from 'react';
import themes from '../globals/styles/themes';
import {darkTheme} from '../globals/styles';

export const ThemeContext = React.createContext();
export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.dark);
  const [theme2, setTheme2] = useState(darkTheme);
  return (
    <ThemeContext.Provider value={{theme, theme2, setTheme, setTheme2}}>
      {props.children}
    </ThemeContext.Provider>
  );
};
