import React, {createContext, useReducer, Dispatch} from "react";
import Reducer, {IAction} from "../reducers";
import fb from "firebase";

interface IContext {
  state: IState;
  reducer: Dispatch<IAction>;
}

export interface IState {
  navbar: {visible: boolean};
  user: {
    modal: {
      visible: boolean;
    };
    login: {
      loggedIn: boolean;
      credential?: fb.auth.UserCredential;
    };
    loginService: {
      loading: boolean;
      error?: fb.auth.Error;
    };
  };
}

export const defaultState: IState = {
  navbar: {visible: false},
  user: {
    modal: {visible: false},
    login: {loggedIn: false, credential: undefined},
    loginService: {loading: false, error: undefined},
  },
};

const defaultValue: IContext = {
  state: defaultState,
  reducer: (): Dispatch<IAction> => {
    return () => {};
  },
};

export const AppContext = createContext<IContext>(defaultValue);
