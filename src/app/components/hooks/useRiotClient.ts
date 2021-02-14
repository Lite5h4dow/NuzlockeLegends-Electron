import axios from "axios";
import React, {useEffect, useState} from "react";
import {IRequest} from "../interfaces";
import {clientInstance} from "../plugins/axios";

export const useRiotClient = () => {
  const [clientData, setClientData] = useState<IRequest>({loading: true});
  const [gameLive, setGameLive] = useState<boolean>(false);

  function getRiotClientData() {
    clientInstance({
      method: "get",
      url: "liveclientdata/allgamedata",
    })
      .then(res => {
        console.log("data!", res);
        setClientData({loading: false, data: res.data});
        setGameLive(true);
      })
      .catch(error => {
        console.log("Error!", error);
        setGameLive(false);
        setClientData({loading: true, error});
      });
  }

  useEffect(() => {
    const interval = setInterval(getRiotClientData, 5 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return {clientData, gameLive};
};
