import React, { createContext, useReducer, Dispatch } from "react";
import Reducer, { IAction } from "../reducers";
import fb from "firebase";

interface IContext {
  state: IState;
  reducer: Dispatch<IAction> | undefined;
}

export interface IState {
  navbar: { visible: boolean };
  user: {
    modal: {
      visible: boolean;
    };
    login: {
      loggedIn: boolean;
      data: fb.auth.UserMetadata;
      credential: fb.auth.UserCredential;
    };
    loginService: {
      loading: boolean;
      error: fb.auth.Error;
    };
  };
}

export const defaultState: IState = {
  navbar: { visible: false },
  user: {
    modal: { visible: false },
    login: { loggedIn: false, data: null, credential: null },
    loginService: { loading: false, error: null },
  },
};

const defaultValue: IContext = {
  state: defaultState,
  reducer: undefined,
};

export const AppContext = createContext<IContext>(defaultValue);
