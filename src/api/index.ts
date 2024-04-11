import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
}

const axiosInstance = axios.create({
  baseURL: 'https://financialmodelingprep.com/',
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
  try {
    const response = await axiosInstance.get<T>(url, config);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
  try {
    const response = await axiosInstance.post<T>(url, data, config);
    return response;
  } catch (error) {
    throw error;
  }
}
