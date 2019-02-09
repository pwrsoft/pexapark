import * as fromReport from './report.actions';

describe('Report Actions', () => {
  describe('LoadFarms Actions', () => {
    describe('LoadFarms', () => {
      it('should create an action', () => {
        const action = new fromReport.LoadFarms();
        expect({ ...action }).toEqual({
          type: fromReport.LOAD_FARMS,
        });
      });
    });

    describe('LoadFarmsFail', () => {
      it('should create an action', () => {
        const err = { err: 'Load Error' };
        const action = new fromReport.LoadFarmsFail(err);

        expect({ ...action }).toEqual({
          type: fromReport.LOAD_FARMS,
          err,
        });
      });
    });

    describe('LoadFarmsSuccess', () => {
      it('should create an action', () => {
        const farms = [
          { id: 1, name: 'Test 1' },
          { id: 2, name: 'Test 2' },
          { id: 3, name: 'Test 3' },
        ];
        const action = new fromReport.LoadFarmsSuccess(farms);

        expect({ ...action }).toEqual({
          type: fromReport.LOAD_FARMS_SUCCESS,
          farms,
        });
      });
    });
  });

  describe('LoadSingleFarm Actions', () => {
    describe('LoadSingleFarm', () => {
      it('should create an action', () => {
        const action = new fromReport.LoadFarm();
        expect({ ...action }).toEqual({
          type: fromReport.LOAD_FARM,
        });
      });
    });

    describe('LoadFarmFail', () => {
      it('should create an action', () => {
        const err = { err: 'Load Error' };
        const action = new fromReport.LoadFarmFail(err);

        expect({ ...action }).toEqual({
          type: fromReport.LOAD_FARM,
          err,
        });
      });
    });

    describe('LoadFarmsSuccess', () => {
      it('should create an action', () => {
        const farm = {
            id: 1,
            farmId: 1,
            name: 'Teat 1',
            report: [
              { month: 'Jan', budget: 37000, realized: 20000 },
              { month: 'Jan', budget: 39000, realized: 40000 }
            ]
          };
        const action = new fromReport.LoadFarmsSuccess(farm);

        expect({ ...action }).toEqual({
          type: fromReport.LOAD_FARM_SUCCESS,
          farm,
        });
      });
    });
  });

  describe('SetFarmId Actions', () => {
    describe('SetFarmId', () => {
      it('should create an action', () => {
        const action = new fromReport.SetFarmId(1);
        expect({ ...action }).toEqual({
          type: fromReport.SET_FARM_ID,
          id: 1,
        });
      });
    });
  });

  describe('SetIsChart Actions', () => {
    describe('SetIsChart', () => {
      it('should create an action', () => {
        const action = new fromReport.SetIsChart(true);
        expect({ ...action }).toEqual({
          type: fromReport.SET_IS_CHART,
          isChart: true,
        });
      });
    });
  });
});
