import * as fromReport from '../actions/report.actions';
import { Farm, FarmData } from '../../models';

export interface ReportState {
  farms: Farm[];
  farmsLoaded: boolean;
  farmsLoading: boolean;
  farmId: number;
  farmData: FarmData;
  farmLoaded: boolean;
  farmLoading: boolean;
  isChart: boolean;
}

export const initialState: ReportState = {
  farms: null,
  farmsLoaded: false,
  farmsLoading: false,
  farmId: null,
  farmData: null,
  farmLoaded: false,
  farmLoading: false,
  isChart: true
};

export function reportReducer(state = initialState, action: fromReport.ReportActions): ReportState {

  switch (action.type) {

    case fromReport.LOAD_FARMS: {
      return Object.assign({}, state, {
        farmsLoading: true
      });
    }

    case fromReport.LOAD_FARMS_SUCCESS: {
      const { farms } = action;
      return Object.assign({}, state, {
        farms: [...farms],
        farmsLoading: false,
        farmsLoaded: true
      });
    }

    case fromReport.LOAD_FARMS_FAIL: {
      const { err } = action;

      return Object.assign({}, state, {
        farmsLoading: false,
        farmsLoaded: false
      });
    }

    case fromReport.SET_FARM_ID: {
      const { id } = action;

      return Object.assign({}, state, {
        farmId: id
      });
    }

    case fromReport.LOAD_FARM: {
      return Object.assign({}, state, {
        farmLoading: true
      });
    }

    case fromReport.LOAD_FARM_SUCCESS: {
      const { farm } = action;

      return Object.assign({}, state, {
        farmLoading: false,
        farmLoaded: true,
        farmData: {...farm}
      });
    }

    case fromReport.LOAD_FARM_FAIL: {
      const { err } = action;

      return Object.assign({}, state, {
        farmLoading: false,
        farmLoaded: false
      });
    }
    case fromReport.SET_IS_CHART: {
      const { isChart } = action;

      return Object.assign({}, state, {
        isChart: isChart
      });
    }
  }
  return state;
}

export const getFarms = (state: ReportState) => state.farms;
export const getFarmsLoaded = (state: ReportState) => state.farmsLoaded;
export const getFarmsLoading = (state: ReportState) => state.farmsLoading;
export const getFarmId = (state: ReportState) => state.farmId;
export const getFarm = (state: ReportState) => state.farmData;
export const getFarmLoaded = (state: ReportState) => state.farmLoaded;
export const getFarmLoading = (state: ReportState) => state.farmLoading;
export const getIsChart = (state: ReportState) => state.isChart;

