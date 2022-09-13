import Axios, { AxiosRequestConfig } from "axios";

function authRequestInterceptor(config: AxiosRequestConfig) {
  config.headers!.authorization = `Bearer hogehoge`;
  config.headers!.Accept = "application/json";
  return config;
}

export const axios = Axios.create({
  baseURL: "https://virtual-background-creator.herokuapp.com/api/v1",
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
