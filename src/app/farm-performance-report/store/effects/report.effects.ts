import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {catchError, switchMap, map, withLatestFrom, filter} from 'rxjs/internal/operators';
import { of } from 'rxjs/index';

import { Farm, FarmData } from '../../models';
import { DataService } from '../../services/data.service';
import * as fromStore from '../../store';
import * as reportActions from '../actions/report.actions';
import * as fromReport from '../../store/reducers/report.reducer';

@Injectable()
export class ReportEffects {

  constructor(private actions$: Actions,
              private dataService: DataService,
              private store: Store<fromStore.State>) { }

  @Effect()
  loadFarms$ = this.actions$.pipe(
    ofType<fromStore.ReportActions>(fromStore.LOAD_FARMS),
    withLatestFrom(this.store.select(fromStore.getFarms)),
    filter(farms => farms),
    switchMap(([_, farms]) => {
      return this.dataService.getFarms().pipe(
        map((loadedFarms: Farm[]) => new fromStore.LoadFarmsSuccess(loadedFarms)),
        catchError(error => of(new fromStore.LoadFarmsFail(error)))
      );
    })
  );

  @Effect()
  loadSingleFarm$ = this.actions$.pipe(
    ofType<fromStore.ReportActions>(fromStore.LOAD_FARM),
    withLatestFrom(this.store.select(fromStore.getFarmId),
      this.store.select(fromStore.getFarmLoaded),
      this.store.select(fromStore.getFarm)),
    switchMap(([_, id, loaded, farm]: [any, number, boolean, FarmData]) => {
      if (!loaded || farm && farm.farmId !== id) {
        return this.dataService.getFarmById(id).pipe(
          map((loadedFarm: Farm[]) => new fromStore.LoadFarmSuccess(loadedFarm)),
          catchError(error => of(new fromStore.LoadFarmFail(error)))
        );
      }
      return of();
    })
  );
}
