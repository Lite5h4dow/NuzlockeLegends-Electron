import React, {useEffect, useState} from "react";
import {useAssociatedAccounts} from "./useAssociatedAccounts";
import {useCurrentUID} from "./useCurrentUID";
import {useRiotAccount} from "./useRiotAccount";

enum Regions {
  EUW = "euw",
}

export const useAccountSearch = () => {
  function getRegionArray() {
    return Object.keys(Regions).map(i => ({
      value: i.toLowerCase(),
      label: i.toUpperCase(),
    }));
  }

  const [state, setState] = useState<{
    userOptions: Array<any>;
    regionOptions: Array<any>;
    loading: boolean;
    selectedUser?: string;
    selectedRegion: string;
  }>({
    userOptions: [],
    loading: false,
    regionOptions: getRegionArray(),
    selectedRegion: getRegionArray()[0].value,
  });

  const {riotAccount, getRiotAccount} = useRiotAccount();
  const {uid} = useCurrentUID();
  const {associatedAccounts, getAssociatedAccounts} = useAssociatedAccounts();

  function getOptions(data: Array<any>) {
    setState({
      ...state,
      userOptions: !!data ? data.map(i => ({value: i, label: i.name})) : [],
    });
  }

  function createOption(inputValue: string) {
    getRiotAccount(inputValue, state.selectedRegion, uid);
  }

  function addUserToOptions(account: any) {
    setState({
      ...state,
      userOptions: [
        ...state.userOptions,
        {value: account, label: account.name},
      ],
    });
  }

  useEffect(() => {
    console.log("getting initial user options from associated");
    getOptions(associatedAccounts.data);
  }, []);

  useEffect(() => {
    console.log("Updating associated accounts, UID changed.");
    getAssociatedAccounts(uid);
  }, [uid]);

  useEffect(() => {
    console.log("updating user options, uid changed");
    getOptions(associatedAccounts.data);
  }, [associatedAccounts.data]);

  useEffect(() => {
    if (!!riotAccount.data) {
      addUserToOptions(riotAccount.data);
    }
  }, [riotAccount.data]);

  useEffect(() => {
    if (!riotAccount.loading) {
      setState({...state, loading: riotAccount.loading});
    }
  }, [riotAccount.loading]);

  return {searchState: state, createOption};
};
