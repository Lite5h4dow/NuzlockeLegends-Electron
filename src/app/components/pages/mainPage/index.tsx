import React from 'react'
import AsyncSelect from 'react-select/async'
import { Button, Container, Segment } from 'semantic-ui-react'

import { functions } from '../../reducers/firebase'

export const MainPage = (): JSX.Element => {

  const getRiotAccount = functions().httpsCallable('getRiotAccount')

  return (
    <Container>
      <Segment className="mainPage">
        Hi there
        <Button content={'test'} onClick={() => {
          console.log("ayo wtf homie")
          // getRiotAccount({ summonerName: 'Lite5h4dow', summonerRegion: 'euw' })
          //   .then((resp) => { console.log(resp) })
          //   .catch((err) => { console.log(err) })
        }} />
      </Segment>
    </Container>
  )
}

export default MainPage