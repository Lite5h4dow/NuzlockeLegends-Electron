import React, {createContext, useReducer, Dispatch} from "react";
import Reducer from "../reducers";
import {IState, IContext, IAction} from "../interfaces";

export const defaultState: IState = {
  navbar: {visible: false},
  user: {
    modal: {visible: false},
    login: {loggedIn: false, credential: undefined},
    loginService: {loading: false, error: undefined},
  },
  cache: {
    champions: {
      loading: false,
    },
  },
};

const defaultValue: IContext = {
  state: defaultState,
  reducer: (): Dispatch<IAction> => {
    return () => {};
  },
};

export const AppContext = createContext<IContext>(defaultValue);
