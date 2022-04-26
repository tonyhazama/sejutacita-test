import { Context, ContextType, createContext, useEffect, useReducer } from "react";
import { AppAction, AppState, ActionTypes } from "../types/app-state";

const {SET_CATEGORY, ADD_BOOKMARK, REMOVE_BOOKMARK} = ActionTypes;

export const initialAppState = {
  bookmark: [],
  categories: []
};

export const appReducer = (state: AppState, action: AppAction) => {
  const {type, payload} = action || {};
  switch (type) {
    case SET_CATEGORY:
      return {
        ...state,
        theme: payload.bookmark,
      };
    case ADD_BOOKMARK:
      return {
        ...state,
        theme: payload.bookmark,
      };
    case REMOVE_BOOKMARK:
      return {
        ...state,
        theme: payload.bookmark,
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

  // useEffect(() => {
  //   const storedTheme = localStorage.getItem('bookmark');
  // //   if (storedTheme) {
  // //     dispatch({type: SET_THEME, payload: {theme: storedTheme}})
  // //   }
  // }, []);

  return (
    <AppContext.Provider value={[store, dispatch]}>
      <div>
        {children}
      </div>
    </AppContext.Provider>
  )
};