import React, {useReducer} from 'react';
import AuthenticationReducer from '../reducers/authentication-reducer';
import {login, logout} from '../actions/authentication-action';

const initState = {
  isLoggedIn: false,
  isLoggingIn: false,
  userInfo: null,
  messageError: null,
};
export const AuthenticationContext = React.createContext();
export const AuthenticationProvider = (props) => {
  const [state, dispatch] = useReducer(AuthenticationReducer, initState);
  return (
    <AuthenticationContext.Provider
      value={{state, login: login(dispatch), logout: logout(dispatch)}}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};
