import { AxiosResponse } from "axios";
import { getInstance, routes } from ".";

const getCategories = async () => {
  try {
    const response: AxiosResponse = await getInstance().get(routes.getCategories());
    return [response.data, ];
  } catch (err) {
    return [, err];
  }
};

const getBooks = async (categoryId: number, page?: number, size?: number) => {
  try {
    const response = await getInstance().get(routes.getBooks(categoryId, page, size));
    
    return [response.data, ];
  } catch (err) {
    return [, err];
  }
};


export {getCategories, getBooks};