import React, {useState} from "react";
import {IAxiosHook} from "../interfaces";
import axiosInstance from "../plugins/axios";

export const useRiotAccount = () => {
  const [riotAccount, setRiotAccount] = useState<IAxiosHook>({
    loading: false,
  });

  function getRiotAccount(
    summonerName: string,
    summonerRegion: string,
    uid?: string
  ): void {
    setRiotAccount({loading: true});
    axiosInstance({
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
