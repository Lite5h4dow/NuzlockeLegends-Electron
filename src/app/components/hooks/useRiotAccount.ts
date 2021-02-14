import React, {useState} from "react";
import {IRequest} from "../interfaces";
import {firebaseInstance} from "../plugins/axios";

export const useRiotAccount = () => {
  const [riotAccount, setRiotAccount] = useState<IRequest>({
    loading: false,
  });

  function getRiotAccount(summonerName: string, summonerRegion: string, uid?: string): void {
    setRiotAccount({loading: true});
    firebaseInstance({
      method: "post",
      data: {uid, summonerName, summonerRegion},
      url: "/getRiotAccount",
    })
      .then(res => {
        console.log(res);
        setRiotAccount({loading: false, data: res.data});
      })
      .catch(error => {
        console.error(error);
        setRiotAccount({loading: false, error});
      });
  }

  return {riotAccount, getRiotAccount};
};
