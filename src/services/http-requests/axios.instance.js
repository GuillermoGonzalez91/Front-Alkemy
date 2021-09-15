import axios from 'axios';
import store from '../../app/store';

const httpAxios = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
});

httpAxios.interceptors.request.use(
  async config => {
    const { user } = store.getState();
    const accessToken = user.user;
    if (user && accessToken) {
      const token = 'Bearer ' + accessToken.token;
      config.headers.Authorization = token;
    }
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

export default {
  get: httpAxios.get,
  post: httpAxios.post,
  put: httpAxios.put,
  patch: httpAxios.patch,
  delete: httpAxios.delete,
};
