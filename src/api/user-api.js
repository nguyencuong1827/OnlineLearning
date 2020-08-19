import axiosClient from './axiosClient';

const userApi = {
  register: (userInfo) => {
    const url = '/user/register';
    return axiosClient.post(url, {
      username: userInfo.username,
      email: userInfo.email,
      phone: userInfo.phone,
      password: userInfo.password,
    });
  },
};

export default userApi;
