import { checkError } from "../utilities";
import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";
// const BASE_URL = "https://nuclear-feodora-jam1automative-d2b224eb.koyeb.app";

console.log("BSE USE: ", BASE_URL);

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
  } catch (error: any) {
    checkError(error);
    throw error;
  }
};

export const getProducts = async () => {
  return handleResponse(apiClient.get(`/products`));
};

export const searchProducts = async (
  year: number,
  model: string,
  categoryId: string,
  mainCategoryName: string
) => {
  return handleResponse(
    apiClient.get(
      `/products/search?category_id=${categoryId}&model=${model}&year=${year}&main_category_name=${mainCategoryName}`
    )
  );
};

export const getSearchOptions = async () => {
  return handleResponse(apiClient.get(`/services/options`));
};
