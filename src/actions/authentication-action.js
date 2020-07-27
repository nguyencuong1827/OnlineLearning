import {
  LOGIN_SUCCESSED,
  LOGIN_REQUEST,
  LOGIN_FAILED,
} from '../globals/constants/actions-constant';
import authenticationApi from '../api/authentication-api';
const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};
const loginSuccess = (userInfo) => {
  return {
    type: LOGIN_SUCCESSED,
    userInfo,
  };
};
const loginFailed = (messageError) => {
  return {
    type: LOGIN_FAILED,
    messageError,
  };
};
export const login = (dispatch) => (username, password) => {
  dispatch(loginRequest());
  const res = authenticationApi.login(username, password);
  if (res.status === 400) {
    dispatch(loginSuccess(res));
  } else {
    dispatch(loginFailed('Username or password not correct'));
  }
};
