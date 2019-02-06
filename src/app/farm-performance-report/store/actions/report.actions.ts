import { Action } from '@ngrx/store';

export const INIT_APP = '[App] Init App';

export class InitApp implements Action {
  readonly type = INIT_APP;
}

export type ReportActions = InitApp;
