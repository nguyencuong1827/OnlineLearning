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
        messageError: null,
      };
    }
    case LOGIN_SUCCESSED: {
      return {
        ...prevState,
        isLoggedIn: true,
        isLoggingIn: false,
        userInfo: action.userInfo,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...prevState,
        isLoggedIn: false,
        isLoggingIn: false,
        messageError: action.messageError,
      };
    }
    case LOGOUT_REQUEST: {
      return {
        isLoggedIn: false,
        isLoggingIn: false,
        userInfo: null,
        messageError: null,
      };
    }
    default: {
      throw new Error();
    }
  }
};

export default AuthenticationReducer;
