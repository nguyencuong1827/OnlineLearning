import {
  LOGIN_SUCCESSED,
  LOGIN_REQUEST,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
} from '../globals/constants/actions-constant';
import authenticationApi from '../api/authentication-api';
import {useAsyncStorage} from '@react-native-community/async-storage';

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
  const {setItem} = useAsyncStorage('@userLogin');
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await setItem(jsonValue);
    } catch (e) {
      // saving error
    }
  };

  dispatch(loginRequest());
  try {
    const res = await authenticationApi.login(email, password);
    const {data, status} = res;
    if (status === 200) {
      let value = {email, password};
      storeData(value);
      dispatch(loginSuccess(data.userInfo, data.token));
    } else {
      dispatch(loginFailed(data.message));
    }
  } catch ({response}) {
    dispatch(loginFailed(response.data.message));
  }
};

const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};
export const logout = (dispatch) => async () => {
  const {removeItem} = useAsyncStorage('@userLogin');

  try {
    await removeItem();
  } catch (error) {
    console.log('Logout fail: ', error);
  }
  dispatch(logoutRequest());
};
