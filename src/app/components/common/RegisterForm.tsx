import React, { ChangeEvent, Dispatch, useContext, useState } from 'react'
import { Button, Form, Message, Segment, Tab } from 'semantic-ui-react'
import { AppContext, IState } from '../context/context'
import { ETypes, IAction } from '../reducers'
import { auth } from '../reducers/firebase'
import LoginWithService from './LoginWithService'
import UserFormMessage from './UserFormMessage'

const RegisterForm = (): JSX.Element => {

  const { state, reducer: r } = useContext(AppContext)

  const [formData, setFormData] = useState({ email: '', pass: '', display: '' })

  function registerSubmit(e: React.FormEvent<HTMLFormElement>) {
    // const data = new FormData(e.currentTarget)
    auth().createUserWithEmailAndPassword(formData.email, formData.pass)
      .then(({ user, credential }) => {
        console.log({ user, credential })
        r({ type: ETypes.UseAuthSuccess, payload: { user, credential } })
        if (user != null) {
          return user.updateProfile({ displayName: formData.display })
        }
      })
      .catch((err) => { console.log(err); r({ type: ETypes.UseAuthFailure, payload: err }) })
  }

  function setEmail(e: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, email: e.currentTarget.value })
  }

  function setPass(e: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, pass: e.currentTarget.value })
  }

  function setDisplay(e: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, display: e.currentTarget.value })
  }


  return (
    <Tab.Pane>
      <Form onSubmit={registerSubmit} loading={state.user.loginService.loading}>
        <Form.Input
          name="display"
          label="Display Name"
          onChange={setDisplay}
          value={formData.display}
          required
          placeholder="johnsmith123"
        />

        <Form.Input
          name="email"
          label="E-Mail Address"
          type="email"
          onChange={setEmail}
          value={formData.email}
          required
          placeholder="john.smith@gmail.com"
        />

        <Form.Input
          name="pass"
          label="Password"
          type="password"
          onChange={setPass}
          value={formData.pass}
          required
          placeholder="Password"
        />

        <UserFormMessage />

        <Form.Button content="Register" type="submit" />
      </Form>
      <LoginWithService />
    </Tab.Pane>
  )
}

export default RegisterForm