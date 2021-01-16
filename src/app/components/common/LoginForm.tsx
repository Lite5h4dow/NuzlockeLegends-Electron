import React, { ChangeEvent, Dispatch, useContext, useState } from 'react'
import { Form, Tab } from 'semantic-ui-react'
import { AppContext } from '../context/context'
import LoginWithService from './LoginWithService'
import { auth } from '../reducers/firebase'
import { ETypes } from '../reducers'
import UserFormMessage from './UserFormMessage'


const LoginForm = (): JSX.Element => {

  const { state, reducer: r } = useContext(AppContext)

  const [formValue, setFormValue] = useState({ email: '', pass: '' })

  function updateEmail(a: ChangeEvent<HTMLInputElement>) {
    setFormValue({ ...formValue, email: a.currentTarget.value })
  }

  function updatePass(a: ChangeEvent<HTMLInputElement>) {
    setFormValue({ ...formValue, pass: a.currentTarget.value })
  }

  function loginSubmit(e: React.FormEvent<HTMLFormElement>) {
    // const data = new FormData(e.currentTarget)
    r({ type: ETypes.SetLoginLoading, payload: null })
    auth().signInWithEmailAndPassword(formValue.email, formValue.pass)
      .then((result) => { r({ type: ETypes.UseAuthSuccess, payload: result }) })
      .catch((err) => { r({ type: ETypes.UseAuthFailure, payload: err }) })
  }

  return (
    <Tab.Pane>
      <Form onSubmit={loginSubmit} loading={state.user.loginService.loading} >
        <Form.Input
          name="email"
          onChange={updateEmail}
          value={formValue.email}
          type="email"
          label="E-Mail Address"
          placeholder="john.smith@gmail.com"
          required
        />
        <Form.Input
          name="pass"
          onChange={updatePass}
          value={formValue.pass}
          type="password"
          label="Password"
          placeholder="Password"
          required
        />

        <UserFormMessage />

        <Form.Button content="Login" type="Submit" />
      </Form>
      <LoginWithService />
    </Tab.Pane >
  )
}

export default LoginForm