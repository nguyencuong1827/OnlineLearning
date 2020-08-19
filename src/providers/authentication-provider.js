import React, {useReducer} from 'react';
import AuthenticationReducer from '../reducers/authentication-reducer';
import {
  login,
  logout,
  updateListFavoriteCategory,
} from '../actions/authentication-action';

const initState = {
  isLoggingIn: false,
  userInfo: null,
  token: null,
  messageError: '',
};
export const AuthenticationContext = React.createContext();
export const AuthenticationProvider = (props) => {
  const [userState, dispatch] = useReducer(AuthenticationReducer, initState);
  return (
    <AuthenticationContext.Provider
      value={{
        userState,
        login: login(dispatch),
        logout: logout(dispatch),
        updateListFavoriteCategory: updateListFavoriteCategory(dispatch),
      }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};
