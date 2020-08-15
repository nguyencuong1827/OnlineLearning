import axiosClient from './axiosClient';

const authenticationApi = {
  login: (email, password) => {
    const url = '/user/login';
    return axiosClient.post(url, {
      email,
      password,
    });
  },
};
export default authenticationApi;
