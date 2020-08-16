import {
  LOGIN_SUCCESSED,
  LOGIN_REQUEST,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
} from '../globals/constants/actions-constant';
const AuthenticationReducer = (prevState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...prevState,
        isLoggingIn: true,
      };
    }
    case LOGIN_SUCCESSED: {
      return {
        ...prevState,
        isLoggingIn: false,
        userInfo: action.userInfo,
        token: action.token,
        messageError: '',
      };
    }
    case LOGIN_FAILED: {
      return {
        ...prevState,
        isLoggingIn: false,
        userInfo: null,
        token: null,
        messageError: action.messageError,
      };
    }
    case LOGOUT_REQUEST: {
      return {
        isLoggingIn: false,
        userInfo: null,
        token: null,
        message: '',
      };
    }
    default: {
      throw new Error();
    }
  }
};

export default AuthenticationReducer;
