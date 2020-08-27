import React, {useState} from 'react';

const LanguageContext = React.createContext();

const LanguageProvider = (props) => {
  const [language, setLanguage] = useState('eng');
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export {LanguageProvider, LanguageContext};
