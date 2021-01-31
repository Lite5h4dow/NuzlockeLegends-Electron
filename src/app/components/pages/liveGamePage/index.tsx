import React, {useEffect} from "react";
import {Container, Dimmer, Loader, Segment} from "semantic-ui-react";
import {useRiotClient} from "../../hooks";

const LiveGamePage = () => {
  const {clientData} = useRiotClient();

  useEffect(() => {
    console.log(clientData.data);
  }, [clientData.data]);

  if (clientData.loading) {
    return (
      <Container>
        <Segment placeholder>
          <Dimmer active>
            <Loader>Waiting for a game to start!</Loader>
          </Dimmer>
        </Segment>
      </Container>
    );
  }

  return <></>;
};

export default LiveGamePage;
