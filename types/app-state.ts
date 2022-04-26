import { Book } from "./book";
import Category from "./category";


export interface AppState {
  bookmark: Book[];
  categories: Category[];
}

export interface AppAction {
  type: string;
  payload: AppState;
}

export enum ActionTypes {
  SET_CATEGORY = "SET_CATEGORY",
  ADD_BOOKMARK = "ADD_BOOKMARK",
  REMOVE_BOOKMARK = "REMOVE_BOOKMARK",
}
