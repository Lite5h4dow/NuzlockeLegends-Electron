import React, {useEffect, useState} from "react";
import {auth} from "../plugins/firebase";

export const useCurrentUID = () => {
  function getUid() {
    return !!auth().currentUser ? auth().currentUser!.uid : "";
  }

  const [uid, setUid] = useState(getUid());

  useEffect(() => {
    setUid(getUid());
  }, [auth().currentUser]);

  return {uid};
};
