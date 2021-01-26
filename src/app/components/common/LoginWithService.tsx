import React, {useContext, useEffect} from "react";
import {Segment, Button, Header} from "semantic-ui-react";
import {AppContext} from "../context/context";
import {ETypes} from "../reducers";
import firebase, {auth} from "../plugins/firebase";

const LoginWithService = (): JSX.Element => {
  const {state, reducer: r} = useContext(AppContext);

  function handleSuccess({user, credential}: any) {
    r({type: ETypes.UseAuthSuccess, payload: {user, credential}});
  }

  function handleError(err: any) {
    r({type: ETypes.UseAuthFailure, payload: err});
  }

  function loginWithGoogle() {
    r({type: ETypes.SetLoginLoading, payload: true});

    auth()
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then(handleSuccess)
      .catch(handleError);
  }

  function loginWithApple() {
    r({type: ETypes.SetLoginLoading, payload: true});

    auth()
      .signInWithPopup(new auth.OAuthProvider("apple.com"))
      .then(handleSuccess)
      .catch(handleError);
  }

  function loginWithTwitter() {
    r({type: ETypes.SetLoginLoading, payload: true});

    auth()
      .signInWithPopup(new auth.TwitterAuthProvider())
      .then(handleSuccess)
      .catch(handleError);
  }

  function LoginWithMicrosoft() {
    r({type: ETypes.SetLoginLoading, payload: true});

    auth()
      .signInWithPopup(new auth.OAuthProvider("microsoft.com"))
      .then(handleSuccess)
      .catch(handleError);
  }

  return (
    <Segment>
      <Header content="Or sign in with:" floated="left" size="large" />
      <Button
        circular
        color="red"
        basic
        onClick={loginWithGoogle}
        icon={"google"}
      />
      <Button
        circular
        color="teal"
        basic
        onClick={loginWithTwitter}
        icon={"twitter"}
      />
      <Button
        circular
        color="black"
        basic
        onClick={loginWithApple}
        icon={"apple"}
      />
      <Button
        circular
        color="grey"
        basic
        onClick={LoginWithMicrosoft}
        icon={"microsoft"}
      />
    </Segment>
  );
};

export default LoginWithService;
