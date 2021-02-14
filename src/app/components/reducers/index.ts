import {IState, IAction} from "../interfaces";
import {ETypes} from "./types";
export {ETypes} from "./types";

function handleLogin(state: IState, payload: any): IState {
  return {
    ...state,
    user: {
      ...state.user,
      login: {
        ...state.user.login,
        loggedIn: true,
        credential: payload.credential,
      },
      loginService: {
        ...state.user.loginService,
        loading: false,
        error: undefined,
      },
      modal: {
        visible: false,
      },
    },
  };
}

function handleLogout(state: IState, payload: any): IState {
  return {
    ...state,
    user: {
      ...state.user,
      login: {
        ...state.user.login,
        loggedIn: false,
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

    case ETypes.Logout:
      return handleLogout(state, action.payload);

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
        navbar: {...state.navbar, visible: <boolean>action.payload},
      };

    case ETypes.ToggleNavbar:
      return {
        ...state,
        navbar: {...state.navbar, visible: !state.navbar.visible},
      };

    case ETypes.SetUserModal:
      return {
        ...state,
        user: {
          ...state.user,
          modal: {...state.user.modal, visible: <boolean>action.payload},
        },
      };

    case ETypes.ToggleUserModal:
      return {
        ...state,
        user: {
          ...state.user,
          modal: {...state.user.modal, visible: !state.user.modal.visible},
        },
      };

    case ETypes.SetChampionCache:
      const {data, loading} = action.payload;
      return {
        ...state,
        cache: {
          ...state.cache,
          champions: {
            ...state.cache.champions,
            loading,
            data,
          },
        },
      };

    case ETypes.SetIsLoggedIn:
      return {
        ...state,
        user: {
          ...state.user,
          login: {
            ...state.user.login,
            loggedIn: action.payload,
          },
        },
      };

    default:
      return state;
  }
}

export default reducer;
