import React from 'react'
import { Button, Container, Segment } from 'semantic-ui-react'

import { functions } from '../../reducers/firebase'

export const MainPage = (): JSX.Element => {

  const getRiotAccount = functions().httpsCallable('getRiotAccount')

  return (
    <Container>
      <Segment className="mainPage">
        Hi there
        <Button content={'test'} onClick={() => { getRiotAccount({ summonerName: "Lite5h4dow", summonerRegion: "euw" }).then((msg) => { console.log(msg) }) }} />
      </Segment>
    </Container>
  )
}

export default MainPage