import {ETypes} from "../reducers/types";

export interface IAction {
  type: ETypes;
  payload: any;
}
