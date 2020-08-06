import React, {useState} from 'react';
import themes from '../globals/styles/themes';

export const ThemeContext = React.createContext();
export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.dark);
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
};
