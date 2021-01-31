import React, {useContext, useEffect} from "react";
import {auth} from "../plugins/firebase";
import {AppContext} from "../context/context";
import {ETypes} from "../reducers";

export const useAccountMonitor = () => {
  const {state, reducer} = useContext(AppContext);
  useEffect(() => {
    reducer({type: ETypes.SetIsLoggedIn, payload: !!auth().currentUser});
  }, [auth().currentUser]);
};
