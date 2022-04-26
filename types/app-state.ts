import { Book } from "./book";
import Category from "./category";


export interface AppState {
  bookmarks: Book[];
  categories: Category[];
}

export interface AppAction {
  type: string;
  payload: AppState | any;
}

export enum ActionTypes {
  SET_CATEGORY = "SET_CATEGORY",
  SET_BOOKMARKS = "SET_BOOKMARKS",
  ADD_BOOKMARK = "ADD_BOOKMARK",
  REMOVE_BOOKMARK = "REMOVE_BOOKMARK",
}
