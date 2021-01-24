import React, {
  FormEvent,
  ChangeEvent,
  useContext,
  useState,
  SyntheticEvent,
} from "react";
import {Checkbox, Form, Input} from "semantic-ui-react";
import {AppContext} from "../context/context";
import {auth} from "../plugins/firebase";

const UserUpdateForm = () => {
  const {state, reducer: r} = useContext(AppContext);

  if (auth().currentUser == null) {
    auth().signOut();
    return <></>;
  }

  const [displayName, setDisplayName] = useState(
    auth().currentUser!.displayName || ""
  );

  const [password, setPassword] = useState("");
  const [passVisible, setPassVisible] = useState(false);

  const [email, setEmail] = useState(auth().currentUser!.email || "");

  function userUpdateDisplayName(): void {
    auth().currentUser!.updateProfile({displayName});
    auth().currentUser!.updateEmail(email);
  }

  return (
    <Form>
      <Form.Input
        label="Display Name"
        value={displayName}
        onChange={({currentTarget}: ChangeEvent<HTMLInputElement>) => {
          setDisplayName(currentTarget.value);
        }}
      />

      <Form.Input
        label="Password"
        placeholder="password"
        value={password}
        type={passVisible ? "text" : "password"}
        onChange={({currentTarget}: ChangeEvent<HTMLInputElement>) => {
          setPassword(currentTarget.value);
        }}
      />

      <Form.Field
        control={Checkbox}
        toggle
        label={{children: "View Password"}}
        onChange={(e: SyntheticEvent, data: any) => {
          setPassVisible(data.checked);
        }}
      />

      <Form.Input
        label="Email Address"
        value={email}
        onChange={({currentTarget}: ChangeEvent<HTMLInputElement>) => {
          setEmail(currentTarget.value);
        }}
      />
    </Form>
  );
};

export default UserUpdateForm;
