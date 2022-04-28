import axios, { AxiosInstance } from 'axios';
import MarvelHelper from '../helpers/MarvelHelper'
// import Auth from '../helpers/Auth'

const api: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
})


api.interceptors.request.use(config => {
  config.params = {
    ts: process.env.MARVEL_API_TS,
    apikey: process.env.MARVEL_API_PUBLIC_KEY,
    hash: MarvelHelper.getHash(
      String(process.env.MARVEL_API_PUBLIC_KEY),
      String(process.env.MARVEL_API_PRIVATE_KEY),
      String(process.env.MARVEL_API_TS),
    )
  };
  return config;
});

// const authKeys = Auth.getToken()

// if (authKeys !== false) {
//   const { token } = authKeys
//   api.defaults.headers.common = { 'Authorization': `bearer ${token}` }
// }

export default api