import {
  LOGIN_SUCCESSED,
  LOGIN_REQUEST,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
} from '../globals/constants/actions-constant';
import authenticationApi from '../api/authentication-api';
import localStorage from '../helpers/local-storage';
import {userInfoKey, tokenKey} from '../globals/constants/key-storage';
import AsyncStorage from '@react-native-community/async-storage';

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};
const loginSuccess = (userInfo, token) => {
  return {
    type: LOGIN_SUCCESSED,
    userInfo,
    token,
  };
};
const loginFailed = (messageError) => {
  return {
    type: LOGIN_FAILED,
    messageError,
  };
};
export const login = (dispatch) => async (email, password) => {
  dispatch(loginRequest());
  const res = await authenticationApi.login(email, password);
  const {data, status} = res;
  //  localStorage._storeData(userInfoKey, data.userInfo);
  // await localStorage._storeData(tokenKey, data.token);
  //await AsyncStorage.setItem('userInfo', JSON.stringify(data.userInfo));
  if (status === 200) {
    dispatch(loginSuccess(data.userInfo, data.token));
  } else {
    dispatch(
      loginFailed(
        'Email or password is incorrect or you have not activated your account',
      ),
    );
  }
};

const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};
export const logout = (dispatch) => () => {
  
  dispatch(logoutRequest());
};
