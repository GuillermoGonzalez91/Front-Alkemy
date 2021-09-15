import axiosInstance from './axios.instance';

class AuthService {
  login(user) {
    return axiosInstance.post('users/auth/login', user);
  }

  signUp(user) {
    return axiosInstance.post('users/auth/register', user);
  }

  async getCurrentUser() {}
}

export default new AuthService();
