import {ILeagueAccount} from "../interfaces/ILeagueAccount";

export interface IDropdowns {
  regions: {
    options: Array<{value: string; label: string}>;
    current: {value: string; label: string};
  };
  accounts: {
    loading: boolean;
    options: Array<{value: ILeagueAccount; label: string}>;
    current?: {label: string; value: ILeagueAccount};
  };
}
