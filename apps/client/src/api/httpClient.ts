import axios from 'axios';
import { getKeyFromLocalStorage } from '../shared/utils/localStorage.ts';

export interface ApiRequest<T> {
  data: T;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const { VITE_APP_API_URL, VITE_APP_API_KEY } = import.meta.env;

// Create an axios instance with default headers for API key authentication
export const httpClient = axios.create({
  baseURL: VITE_APP_API_URL,
  headers: {
    'X-API-Key': VITE_APP_API_KEY,
  },
});

// Request interceptor
httpClient.interceptors.request.use(
  (config) => {
    const token = getKeyFromLocalStorage('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// Response interceptor
httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
