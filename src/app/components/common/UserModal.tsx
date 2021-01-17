import React, { useContext } from 'react'
import { Modal, Tab } from 'semantic-ui-react'
import { AppContext } from '../context/context'
import { ETypes } from '../reducers'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import UserProfile from './UserProfile'

export const UserModal = (): JSX.Element => {

  const { state, reducer: r } = useContext(AppContext)

  const { user } = state

  function setLoginModal(a: boolean): void {
    r({ type: ETypes.ToggleUserModal, payload: a })
  }

  const panes = [
    { menuItem: "Login", render: () => <LoginForm /> },
    { menuItem: "Register", render: () => <RegisterForm /> }
  ]

  return (
    <Modal open={user.modal.visible} closeIcon onClose={() => { setLoginModal(false) }}>
      <Modal.Content>
        {user.login.loggedIn ? <UserProfile /> : <Tab panes={panes} />}
      </Modal.Content>
    </Modal >
  )
}
