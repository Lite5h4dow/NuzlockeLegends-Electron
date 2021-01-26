import React, {useState} from "react";
import {IRequest} from "../interfaces";
import axiosInstance from "../plugins/axios";

export const useAssociatedAccounts = () => {
  const [associatedAccounts, setAssociatedAccounts] = useState<IRequest>({
    loading: false,
  });
  function getAssociatedAccounts(uid?: string): void {
    console.log("log", uid == null);
    if (!!!uid) return;
    setAssociatedAccounts({loading: true});
    axiosInstance({
      method: "post",
      data: {uid},
      url: "/getAssociatedAccounts",
    })
      .then(res => {
        setAssociatedAccounts({loading: false, data: res.data});
      })
      .catch(err => {
        setAssociatedAccounts({loading: false, error: err});
      });
  }

  return {associatedAccounts, getAssociatedAccounts};
};
