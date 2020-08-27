import {
  LOGIN_SUCCESSED,
  LOGIN_REQUEST,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  UPDATE_FAVORITE_CATEGORY,
  UPDATE_USER_INFO,
} from '../globals/constants/actions-constant';
const AuthenticationReducer = (prevState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return {
        ...prevState,
        isLoggingIn: true,
        messageError: '',
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
        token: null,
        messageError: action.messageError,
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...prevState,
        isLoggingIn: false,
        token: null,
        messageError: '',
      };
    }
    case UPDATE_FAVORITE_CATEGORY: {
      return {
        ...prevState,
        userInfo: {
          ...prevState.userInfo,
          favoriteCategories: action.listNewFavorite,
        },
      };
    }
    case UPDATE_USER_INFO: {
      return {
        ...prevState,
        userInfo: {
          ...prevState.userInfo,
          name: action.newInfo.name,
          phone: action.newInfo.phone,
          avatar: action.newInfo.avatar,
        },
      };
    }
    default: {
      throw new Error();
    }
  }
};

export default AuthenticationReducer;
