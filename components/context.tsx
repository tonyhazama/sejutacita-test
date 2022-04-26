import { Context, ContextType, createContext, useEffect, useReducer } from "react";
import { getCategories } from "../services/books-api";
import { AppAction, AppState, ActionTypes } from "../types/app-state";

const {SET_CATEGORY, SET_BOOKMARKS, REMOVE_BOOKMARK} = ActionTypes;

export const initialAppState = {
  bookmarks: [],
  categories: []
};

export const appReducer = (state: AppState, action: AppAction) => {
  const {type, payload} = action || {};
  switch (type) {
    case SET_CATEGORY:
      return {
        ...state,
        categories: payload.categories,
      };
    case SET_BOOKMARKS:
      return {
        ...state,
        bookmarks: payload.bookmarks,
      };
    default:
      return { ...state };
  }
};

export const AppContext: Context<any> = createContext([]);

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider = ({children}: Props) => {
  const [store, dispatch] = useReducer(appReducer, initialAppState);

  useEffect(() => {
    loadLocalBookmark();
    getCategoriesData();
  }, []);

  const loadLocalBookmark = () => {
    const localBookmarks = localStorage.getItem("bookmarks");
    if(localBookmarks && JSON.stringify(localBookmarks)) {
      dispatch({type: SET_BOOKMARKS, payload: {bookmarks: JSON.stringify(localBookmarks)}});
    }
  }
  
  const getCategoriesData = async () => {
    try {
      const [categories] = await getCategories();
      dispatch({type: SET_CATEGORY, payload: {categories}});
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AppContext.Provider value={[store, dispatch]}>
      <div>
        {children}
      </div>
    </AppContext.Provider>
  )
};