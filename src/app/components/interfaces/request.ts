export interface IAxiosHook {
  loading: boolean;
  error?: Error;
  data?: any;
}
