import axios, { AxiosError } from "axios";

const baseURL = "https://tonyhazama-reverseproxy.herokuapp.com/";

const errorResponseHandler = (error: AxiosError) => {
  return Promise.reject(error);
};

const getInstance = () => {
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 60000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
  });

  instance.interceptors.response.use(
    (response) => response,
    errorResponseHandler
  );
  return instance;
};

const routes = {
  getCategories: () => `/https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories`,
  getBooks: (categoryId: number, page: number = 0, size: number = 10) => `/https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${categoryId}&page=${page}&size=${size}`,
};

export { getInstance, routes, baseURL };
