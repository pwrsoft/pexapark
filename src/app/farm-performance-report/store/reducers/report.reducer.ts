import { createSelector } from '@ngrx/store';
import { ReportActions } from '../actions';
import * as reportActions from '../actions/report.actions';

export interface ReportState {
  init: boolean;
}

export const initialState: ReportState = {
  init: true
};

export function reportReducer(state = initialState, action: ReportActions): ReportState {

    switch (action.type) {
        default: {
            return state;
        }
    }
}

/**
 * Selectors
 */
