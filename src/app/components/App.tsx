import React, { ReactElement, useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppContext, defaultState } from './context/context'
import Layout from './layout'
import Routes from './pages/routes'
import Reducer from './reducers'

import 'semantic-ui-css/semantic.min.css'

const App = (): ReactElement => {
  const [state, reducer] = useReducer(Reducer, defaultState);
  return (
    <AppContext.Provider value={{ state, reducer }}>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </AppContext.Provider>
  )
}

export default App