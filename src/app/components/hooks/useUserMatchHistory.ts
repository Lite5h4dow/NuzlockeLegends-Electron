import React, {useEffect, useState} from "react";
import {IRequest} from "../interfaces";
import axiosInstance from "../plugins/axios";

export const useUserMatchHistory = () => {
  const [history, setHistory] = useState<IRequest>({loading: false});

  useEffect(() => {
    console.log(history.data);
  }, [history.data]);

  function getUserHistory(accountId: string) {
    setHistory({loading: true});

    axiosInstance({
      method: "post",
      data: {accountId},
      url: "getMatchHistory",
    })
      .then(res => {
        setHistory({data: res.data, loading: false});
      })
      .catch(error => {
        setHistory({error, loading: false});
      });
  }

  return {history, getUserHistory};
};
