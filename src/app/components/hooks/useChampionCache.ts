import axios from "axios";
import React, {useContext, useEffect} from "react";
import {AppContext} from "../context/context";
import {ETypes} from "../reducers";

export const useChampionCache = () => {
  const {reducer} = useContext(AppContext);

  function getChampions() {
    reducer({type: ETypes.SetChampionCache, payload: {loading: true}});

    axios({
      method: "get",
      url: "http://ddragon.leagueoflegends.com/cdn/11.2.1/data/en_US/champion.json",
    })
      .then(res => {
        console.log(res.data.data);
        reducer({type: ETypes.SetChampionCache, payload: {loading: true, data: res.data.data}});
      })
      .catch(error => {
        throw error;
      });
  }

  useEffect(() => {
    getChampions();
  }, []);
};
