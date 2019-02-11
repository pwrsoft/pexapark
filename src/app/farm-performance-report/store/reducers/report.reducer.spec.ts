// ONLY Load All Farms functionality is covered by tests

import * as fromReport from './report.reducer';
import * as fromActions from '../actions/report.actions';
import { Farm } from '../../models';

describe('ReportReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReport;
      const action = {} as any;
      const state = fromReport.reportReducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LOAD_FARMS action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromReport;
      const action = new fromActions.LoadFarms();
      const state = fromReport.reportReducer(initialState, action);

      expect(state.farmsLoading).toEqual(true);
      expect(state.farmsLoaded).toEqual(false);
      expect(state.farms).toEqual(null);
    });
  });

  describe('LOAD_FARMS_SUCCESS action', () => {
    it('should populate the farms array', () => {
      const farms: Farm[] = [
        { id: 1, name: 'Test 1' },
        { id: 2, name: 'Test 2' },
        { id: 3, name: 'Test 3' }
      ];

      const { initialState } = fromReport;
      const action = new fromActions.LoadFarmsSuccess(farms);
      const state = fromReport.reportReducer(initialState, action);

      expect(state.farmsLoaded).toEqual(true);
      expect(state.farmsLoading).toEqual(false);
      expect(state.farms).toEqual(farms);
    });
  });

  describe('LOAD_FARMS_FAIL action', () => {
    it('should return the previous state', () => {
      const { initialState } = fromReport;
      const previousState = { ...initialState, farmsLoading: false };
      const action = new fromActions.LoadFarmsFail({});
      const state = fromReport.reportReducer(previousState, action);
      expect(state).toEqual(initialState);
    });
  });
});

describe('ReportReducer Selectors', () => {
  describe('getFarms', () => {
    it('should return .farms', () => {
      const farms: Farm[] = [
        { id: 1, name: 'Test 1' },
        { id: 2, name: 'Test 2' },
        { id: 3, name: 'Test 3' }
      ];
      const { initialState } = fromReport;
      const previousState = { ...initialState, farms };
      const slice = fromReport.getFarms(previousState);

      expect(slice).toEqual(farms);
    });
  });

  describe('getFarmsLoading', () => {
    it('should return .farmsLoading', () => {
      const { initialState } = fromReport;
      const previousState = { ...initialState, farmsLoading: true };
      const slice = fromReport.getFarmsLoading(previousState);

      expect(slice).toEqual(true);
    });
  });

  describe('getFarmsLoaded', () => {
    it('should return .farmsLoaded', () => {
      const { initialState } = fromReport;
      const previousState = { ...initialState, farmsLoaded: true };
      const slice = fromReport.getFarmsLoaded(previousState);

      expect(slice).toEqual(true);
    });
  });
});
