import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, switchMap, map, withLatestFrom } from 'rxjs/internal/operators';
import { of } from 'rxjs/index';

import { Farm, FarmData } from '../../models';
import { DataService } from '../../services/data.service';
import * as reportReducer from '../reducers';
import * as reportActions from '../actions/report.actions';

@Injectable()
export class ReportEffects {

  constructor(private actions$: Actions,
              private dataService: DataService,
              private store: Store<reportReducer.State>) { }

  @Effect()
  loadFarms$ = this.actions$.pipe(
    ofType<reportActions.ReportActions>(reportActions.LOAD_FARMS),
    withLatestFrom(this.store.select(reportReducer.getFarms)),
    switchMap(() => {
      return this.dataService.getFarms().pipe(
        map((loadedFarms: Farm[]) => new reportActions.LoadFarmsSuccess(loadedFarms)),
        catchError(error => of(new reportActions.LoadFarmsFail(error)))
      );
    })
  );

  @Effect()
  loadSingleFarm$ = this.actions$.pipe(
    ofType<reportActions.ReportActions>(reportActions.LOAD_FARM),
    withLatestFrom(this.store.select(reportReducer.getFarmId),
      this.store.select(reportReducer.getFarmLoaded),
      this.store.select(reportReducer.getFarm)),
    switchMap(([_, id, loaded, farm]: [any, number, boolean, FarmData]) => {
      if (!loaded || farm && farm.farmId !== id) {
        return this.dataService.getFarmById(id).pipe(
          map((loadedFarm: FarmData) => new reportActions.LoadFarmSuccess(loadedFarm)),
          catchError(error => of(new reportActions.LoadFarmFail(error)))
        );
      }
      return of(new reportActions.LoadFarmSuccess(farm));
    })
  );
}
