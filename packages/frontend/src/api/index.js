import axios from 'axios';
import { BASE_URL } from 'constants';

export const apiInstance = axios.create({
  baseURL: BASE_URL,
});

export const token = {
  set(token) {
    apiInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    apiInstance.defaults.headers.common.Authorization = '';
  },
};
