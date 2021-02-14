import React, {useEffect, useState} from "react";
import {Header, Button, Divider, Segment, Grid, ButtonContent} from "semantic-ui-react";
import {useRiotClient} from "../../hooks/useRiotClient";
import {auth} from "../../plugins/firebase";

const CurrentNuzlocke = () => {
  const {clientData, gameLive} = useRiotClient();

  useEffect(() => {
    if (gameLive) {
      console.log(clientData.data);
    }
  }, [clientData.data]);

  if (!!!auth().currentUser && !gameLive) {
    return (
      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center" divided>
          <Grid.Row>
            <Grid.Column>
              <Header content="Start A New Nuzlocke" />
              <Button content="Start!" onClick={() => {}} />
            </Grid.Column>

            <Grid.Column>
              <Header content="Login or Register to save Nuzlockes" />
              <Button content="Login / Register" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }

  console.log(clientData);
  return <>game live, check console</>;
};

export default CurrentNuzlocke;
