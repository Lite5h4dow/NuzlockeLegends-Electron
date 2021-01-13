<<<<<<< HEAD
import React, { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppContext, defaultState } from './context/context'
import Layout from './layout'
import Routes from './pages/routes'
import Reducer from './reducers'

import 'semantic-ui-css/semantic.min.css'

const App = (): JSX.Element => {
  const [state, reducer] = useReducer(Reducer, defaultState);
  return (
    <AppContext.Provider value={{ state, reducer }}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </AppContext.Provider>
=======
import React from 'react'

const App = (): JSX.Element => {
  return (
    <>
      <h1>Hello World!?</h1>
    </>
>>>>>>> template/master
  )
}

export default App