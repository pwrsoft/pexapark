import { MetaReducer, ActionReducer, ActionReducerMap, createSelector } from '@ngrx/store';
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

/**
 *  Selectors
 */
export const getReportState = (state: State ) => state.report;
export const getFarms = createSelector( getReportState, fromReport.getFarms);
export const getFarmsLoaded = createSelector( getReportState, fromReport.getFarmsLoaded);
export const getFarmsLoading = createSelector( getReportState, fromReport.getFarmsLoading);
export const getFarmId = createSelector( getReportState, fromReport.getFarmId);
export const getFarm = createSelector( getReportState, fromReport.getFarm);
export const getFarmLoaded = createSelector( getReportState, fromReport.getFarmLoaded);
export const getFarmLoading = createSelector( getReportState, fromReport.getFarmLoading);
export const getIsChart = createSelector( getReportState, fromReport.getIsChart);
