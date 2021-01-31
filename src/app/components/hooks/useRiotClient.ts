import axios from "axios";
import React, {useEffect, useState} from "react";
import {IRequest} from "../interfaces";

export const useRiotClient = () => {
  const [clientData, setClientData] = useState<IRequest>({loading: true});

  function getRiotClientData() {
    axios({method: "get", url: "http://localhost:2999/liveclientdata/allgamedata/"})
      .then(res => {
        console.log(res);
        setClientData({loading: false, data: res.data});
      })
      .catch(error => {
        console.log(error);
        setClientData({loading: true, error});
      });
  }

  useEffect(() => {
    const interval = setInterval(getRiotClientData, 5 * 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return {clientData};
};
