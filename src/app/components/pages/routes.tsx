import React from "react";
import {HashRouter, Route} from "react-router-dom";

import MainPage from "./mainPage";
import LiveGamePage from "./liveGamePage";

const Routes = (): JSX.Element => {
  return (
    <HashRouter>
      <Route path="/" exact component={MainPage} />
      <Route path="/LiveGame" component={LiveGamePage} />
    </HashRouter>
  );
};

export default Routes;
