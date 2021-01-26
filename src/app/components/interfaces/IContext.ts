import {Dispatch} from "react";
import {IAction} from "./IAction";
import {IState} from "../interfaces/IState";

export interface IContext {
  state: IState;
  reducer: Dispatch<IAction>;
}
