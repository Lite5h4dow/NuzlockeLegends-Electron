import React from "react";
import {Container, Tab} from "semantic-ui-react";
import {auth} from "../../plugins/firebase";
import CurrentNuzlocke from "./currentNuzlocke";

export const MainPage = (): JSX.Element => {
  const panes = [
    {
      menuItem: "Your Nuzlocke",
      render: () => (
        <Tab.Pane attached={false}>
          <CurrentNuzlocke />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "History",
      render: () => (
        <Tab.Pane attached={false}>
          <></>
        </Tab.Pane>
      ),
    },
  ];

  return (
    <Container>
      <Tab menu={{secondary: true, pointing: true}} panes={panes} />
    </Container>
  );
};

export default MainPage;
