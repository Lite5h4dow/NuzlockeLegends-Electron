import { IState } from "../context/context";
import { ETypes } from "./types";
export { ETypes } from "./types";

export interface IAction {
  type: ETypes;
  payload: any;
}

function handleLogin(state: IState, payload: any): IState {
  return {
    ...state,
    user: {
      ...state.user,
      login: {
        ...state.user.login,
        loggedIn: true,
        data: payload.user,
        credential: payload.credential,
      },
      loginService: {
        ...state.user.loginService,
        loading: false,
        error: null,
      },
      modal: {
        visible: false,
      },
    },
  };
}

function handleLoginError(state: IState, payload: any): IState {
  return {
    ...state,
    user: {
      ...state.user,
      login: {
        ...state.user.login,
        loggedIn: false,
      },
      loginService: {
        ...state.user.loginService,
        loading: false,
        error: payload,
      },
    },
  };
}

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case ETypes.UseAuthSuccess:
      return handleLogin(state, action.payload);

    case ETypes.UseAuthFailure:
      return handleLoginError(state, action.payload);

    case ETypes.SetLoginLoading:
      return {
        ...state,
        user: {
          ...state.user,
          loginService: {
            ...state.user.loginService,
            loading: <boolean>action.payload,
          },
        },
      };

    case ETypes.SetNavbar:
      return {
        ...state,
        navbar: { ...state.navbar, visible: <boolean>action.payload },
      };

    case ETypes.ToggleNavbar:
      return {
        ...state,
        navbar: { ...state.navbar, visible: !state.navbar.visible },
      };

    case ETypes.SetUserModal:
      return {
        ...state,
        user: {
          ...state.user,
          modal: { ...state.user.modal, visible: <boolean>action.payload },
        },
      };

    case ETypes.ToggleUserModal:
      return {
        ...state,
        user: {
          ...state.user,
          modal: { ...state.user.modal, visible: !state.user.modal.visible },
        },
      };

    default:
      return state;
  }
}

export default reducer;
