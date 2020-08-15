import axios from 'axios';
import queryString from 'query-string';
import p from 'pretty-format';

const axiosClient = axios.create({
  baseURL: 'https://api.itedu.me',
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return {
      status: response.status,
      data: response.data,
    };
  },
  (error) => {
    return {
      status: error.response.status,
      data: error.response.data,
    };
  },
);

export default axiosClient;
