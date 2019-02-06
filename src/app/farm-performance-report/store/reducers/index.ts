import { MetaReducer, ActionReducer, ActionReducerMap } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';

import * as fromReport from './report.reducer';

import environment from '../../../app.environment';

export interface State {
  report: fromReport.ReportState;
}

export const reducers: ActionReducerMap<State> = {
  report: fromReport.reportReducer
};


export function logger(reducer: ActionReducer<State>): any {
  // default, no options
  return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<State>[] = environment.env === 'PROD' ? [] : [logger];
