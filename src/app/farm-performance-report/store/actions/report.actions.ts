import { Action } from '@ngrx/store';
import { Farm, FarmData } from '../../models';

export const LOAD_FARMS = '[Report] Load Farms';
export const LOAD_FARMS_SUCCESS = '[Report] Load Farms Success';
export const LOAD_FARMS_FAIL = '[Report] Load Farms Fail';

export const SET_FARM_ID = '[Report] Set Farm Id';

export const LOAD_FARM = '[Report] Load Farm';
export const LOAD_FARM_SUCCESS = '[Report] Load Farm Success';
export const LOAD_FARM_FAIL = '[Report] Load Farm Fail';

export const SET_IS_CHART = '[Report] Set Is Chart';

export class LoadFarms implements Action {
  readonly type = LOAD_FARMS;
}

export class LoadFarmsSuccess implements Action {
  readonly type = LOAD_FARMS_SUCCESS;
  constructor(public farms: Farm[]) {}
}

export class LoadFarmsFail implements Action {
  readonly type = LOAD_FARMS_FAIL;
  constructor(public err: any) {}
}

export class SetFarmId implements Action {
  readonly type = SET_FARM_ID;
  constructor(public id: number) {}
}

export class LoadFarm implements Action {
  readonly type = LOAD_FARM;
}

export class LoadFarmSuccess implements Action {
  readonly type = LOAD_FARM_SUCCESS;
  constructor(public farm: FarmData) {}
}

export class LoadFarmFail implements Action {
  readonly type = LOAD_FARM_FAIL;
  constructor(public err: any) {}
}

export class SetIsChart implements Action {
  readonly type = SET_IS_CHART;
  constructor(public isChart: boolean) {}
}

export type ReportActions =
  | LoadFarms
  | LoadFarmsSuccess
  | LoadFarmsFail
  | SetFarmId
  | LoadFarm
  | LoadFarmSuccess
  | LoadFarmFail
  | SetIsChart;
