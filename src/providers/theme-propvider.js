import React, {useState} from 'react';
import themes from '../globals/styles/themes';
import {lightTheme} from '../globals/styles';

export const ThemeContext = React.createContext();
export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.light);
  const [theme2, setTheme2] = useState(lightTheme);
  return (
    <ThemeContext.Provider value={{theme, theme2, setTheme, setTheme2}}>
      {props.children}
    </ThemeContext.Provider>
  );
};
