import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export const authService = {
  async login(credentials: LoginCredentials) {
    try {
      const url = `${API_URL}/auth/login/`;
      console.log('Attempting login with URL:', url);
      const response = await axios.post(url, credentials);
      console.log('Login response:', response);
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      if (axios.isAxiosError(error)) {
        console.error('Error details:', {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          headers: error.response?.headers,
        });
      }
      throw error;
    }
  },

  async register(data: RegisterData) {
    const url = `${API_URL}/auth/register/`;
    console.log('Attempting registration with URL:', url);
    const response = await axios.post(url, data);
    return response.data;
  },

  async logout() {
    // Clear local storage or handle token invalidation
    localStorage.removeItem('token');
  },

  setAuthToken(token: string) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    localStorage.setItem('token', token);
  },

  getAuthToken() {
    return localStorage.getItem('token');
  },

  removeAuthToken() {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  },
}; 