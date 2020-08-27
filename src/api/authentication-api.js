import axiosClient from './axiosClient';

const authenticationApi = {
  login: (email, password) => {
    const url = '/user/login';
    return axiosClient.post(url, {
      email,
      password,
    });
  },
  loginWithGoogle: (email, id) => {
    const url = '/user/login-google-mobile';
    return axiosClient.post(url, {
      email,
      id,
    });
  },
};
export default authenticationApi;
