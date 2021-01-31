import React, {useContext} from "react";
import {Message} from "semantic-ui-react";
import {AppContext} from "../context/context";

const UserFormMessage = (): JSX.Element => {
  const {state, reducer: r} = useContext(AppContext);

  const error = state.user.loginService.error;

  return <Message visible={error != null} content={error != null ? error.message : ""} error />;
};

export default UserFormMessage;
