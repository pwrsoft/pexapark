import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';

import { hot, cold } from 'jasmine-marbles';
import { Observable, empty, of } from 'rxjs';

import { DataService } from '../../services/data.service';
import * as fromEffects from './report.effects';
import * as fromActions from '../actions/report.actions';
import * as fromReducers from '../reducers/report.reducer';
import { Farm } from '../../models';

import { StoreModule } from '@ngrx/store';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('ReportEffects', () => {
  let actions$: TestActions;
  let service: DataService;
  let effects: fromEffects.ReportEffects;

  const farms: Farm[] = [
    { id: 1, name: 'Test 1' },
    { id: 2, name: 'Test 2' },
    { id: 3, name: 'Test 3' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot(fromReducers.reportReducer)],
      providers: [
        DataService,
        fromEffects.ReportEffects,
        { provide: Actions, useFactory: getActions }
      ],
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(DataService);
    effects = TestBed.get(fromEffects.ReportEffects);

    spyOn(service, 'getFarms').and.returnValue(of(farms));
  });

  describe('loadFarms', () => {
    it('should return a collection from LoadFarmsSuccess', () => {
      const action = new fromActions.LoadFarms();
      const completion = new fromActions.LoadFarmsSuccess(farms);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadFarms$).toBeObservable(expected);
    });
  });
});
