import React from "react";
import {Switch, Route} from "react-router-dom";

import MainPage from "./mainPage";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" component={MainPage} />
    </Switch>
  );
};

export default Routes;
