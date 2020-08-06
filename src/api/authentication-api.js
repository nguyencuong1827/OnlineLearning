const authenticationApi = {
  login: (username, password) => {
    let res = {
      status: 200,
    };
    if (username !== 'nguyencuong' || password !== '123') {
      return res;
    }
    res = {
      ...res,
      status: 400,
      username: 'nguyencuong',
      token: '123token123',
    };
    return res;
  },
};
export default authenticationApi;
