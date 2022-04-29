import axios, { AxiosInstance } from "axios";
// import Auth from '../helpers/Auth'

const api: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use((config) => {
  return config;
});

// const authKeys = Auth.getToken()

// if (authKeys !== false) {
//   const { token } = authKeys
//   api.defaults.headers.common = { 'Authorization': `bearer ${token}` }
// }

export default api;
