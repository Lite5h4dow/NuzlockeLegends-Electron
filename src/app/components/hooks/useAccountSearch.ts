import React, {useEffect, useState} from "react";
import {ActionMeta} from "react-select";
import {IDropdowns, ILeagueAccount} from "../interfaces";
import {useAssociatedAccounts} from "./useAssociatedAccounts";
import {useCurrentUID} from "./useCurrentUID";
import {useRiotAccount} from "./useRiotAccount";

enum Regions {
  EUW = "euw",
  NA = "na",
}

export const useAccountSearch = () => {
  const {riotAccount, getRiotAccount} = useRiotAccount();
  const {uid} = useCurrentUID();
  const {associatedAccounts, getAssociatedAccounts} = useAssociatedAccounts();

  const RegionOptions = Object.keys(Regions)
    .map(i => i.toLowerCase())
    .map(r => ({value: r, label: r.toUpperCase()}));
  const [dropdowns, setDropdowns] = useState<IDropdowns>({
    regions: {
      options: RegionOptions,
      current: RegionOptions[0],
    },
    accounts: {
      loading: false,
      options: [],
    },
  });

  function onCreateOption(value: string) {
    getRiotAccount(value, dropdowns.regions.current.value, uid);
  }

  function setRegion(value: any) {
    setDropdowns({
      ...dropdowns,
      regions: {
        ...dropdowns.regions,
        current: value,
      },
    });
  }

  function setAccount(value: any) {
    setDropdowns({
      ...dropdowns,
      accounts: {
        ...dropdowns.accounts,
        current: value,
      },
    });
  }

  useEffect(() => {
    setDropdowns({
      ...dropdowns,
      accounts: {
        ...dropdowns.accounts,
        loading: riotAccount.loading,
      },
    });
  }, [riotAccount.loading]);

  useEffect(() => {
    const {data} = riotAccount;
    if (!!data) {
      setDropdowns({
        ...dropdowns,
        accounts: {
          ...dropdowns.accounts,
          options: [
            ...dropdowns.accounts.options,
            {value: data, label: data.name},
          ],
          current: {value: data, label: data.name},
          loading: false,
        },
      });
    }
  }, [riotAccount.data]);

  useEffect(() => {
    console.log("current uid", uid);
    if (!!uid) {
      getAssociatedAccounts(uid);
    }
  }, [uid]);

  useEffect(() => {
    if (!associatedAccounts.data) {
      return;
    }

    console.log(!!associatedAccounts.data, associatedAccounts.data);
    setDropdowns({
      ...dropdowns,
      accounts: {
        ...dropdowns.accounts,
        options: (associatedAccounts.data as Array<ILeagueAccount>).map(a => ({
          label: a.name,
          value: a,
        })),
      },
    });
  }, [associatedAccounts.data]);

  return {dropdowns, onCreateOption, setRegion, setAccount};
};
