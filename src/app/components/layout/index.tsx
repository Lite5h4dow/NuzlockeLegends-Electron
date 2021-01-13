//React
import React, { useContext, useReducer, useRef } from 'react'
import { ETypes } from '../reducers'
import { AppContext } from '../context/context'
import { UserModal } from '../common'

//CSS
import './layout.css'

//Semantic UI
import { Container, Grid, Button, Menu, Segment, Sidebar } from 'semantic-ui-react'
import Navbar from "./Navbar"

const Layout = ({ children }: { children?: JSX.Element }): JSX.Element => {

  const { state, reducer: r } = useContext(AppContext)

  function setNavbar(a: boolean): void {
    if (r) r({ type: ETypes.SetNavbar, payload: a })
  }

  function ToggleNavbar(): void {
    console.log("test")
    if (r) r({ type: ETypes.ToggleNavbar, payload: null })
  }

  function toggleLoginModal(): void {
    if (r) r({ type: ETypes.ToggleUserModal, payload: null })
  }

  return (
    <div className="mainBody">
      <UserModal />
      <Sidebar.Pushable className="test">
        <Sidebar as={Menu} visible={state.navbar.visible} animation='overlay' vertical width="thin" onHide={() => { setNavbar(false) }} >
          <Navbar />
        </Sidebar>
        <Sidebar.Pusher>
          <Segment basic inverted color="black">
            <Container>
              <Grid columns={2}>
                <Grid.Column>
                  <Button icon={"bars"} circular basic color="yellow" floated="left" onClick={() => { ToggleNavbar() }} />
                </Grid.Column>
                <Grid.Column>
                  <Button icon={"user"} circular basic color="yellow" floated="right" onClick={() => { toggleLoginModal() }} />
                </Grid.Column>
              </Grid>
            </Container>
          </Segment>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  )
}

export default Layout