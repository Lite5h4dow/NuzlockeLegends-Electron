import fb from "firebase";

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
