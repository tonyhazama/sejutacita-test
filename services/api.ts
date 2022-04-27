
const API = {
  getCategories: () => `/https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories`,
  getBooks: (categoryId: number|string, page: number|string = 0, size: number|string = 300) => 
    (
      `/https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${categoryId}&page=${page}&size=${size}`
    ),
};

export default API;