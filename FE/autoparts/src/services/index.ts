import { checkError } from "../utilities";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// apiClient.interceptors.request.use(
//   (config) => {
//     const token = Cookies.get("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// Handle response
const handleResponse = async (promise: Promise<any>) => {
  try {
    const response = await promise;
    return response;
  } catch (error) {
    checkError(error);
    throw error;
  }
};

export const getProjects = async (userId: number) => {
  return handleResponse(apiClient.get(`/projects/user/${userId}`));
};
