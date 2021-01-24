import React, {useContext} from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Header,
  Segment,
} from "semantic-ui-react";
import {AppContext} from "../context/context";
import {ETypes} from "../reducers";
import {auth} from "../plugins/firebase";
import UserUpdateForm from "./UserUpdateForm";

const UserProfile = (): JSX.Element => {
  const {state, reducer: r} = useContext(AppContext);

  return (
    <Container>
      <Segment>
        <Header textAlign="center">{auth().currentUser!.displayName}</Header>
        <ButtonGroup centered>
          <Button
            content="Logout"
            onClick={() => {
              auth()
                .signOut()
                .then(() => {
                  r({type: ETypes.Logout, payload: null});
                });
            }}
          />
        </ButtonGroup>
      </Segment>
      <UserUpdateForm />
    </Container>
  );
};

export default UserProfile;
