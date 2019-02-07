import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs/index';

import { Farm } from '../../models/farm.model';
import * as fromStore from '../../store';

@Component({
  selector: 'app-report',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  farms$: Observable<Farm[]>;
  farmsLoading$: Observable<boolean>;
  farmLoading$: Observable<boolean>;
  isChart$: Observable<boolean>;

  constructor(
    private store: Store<fromStore.State>,
  ) { }

  ngOnInit() {
    this.farms$ = this.store.select(fromStore.getFarms);
    this.farmsLoading$ = this.store.select(fromStore.getFarmsLoading);
    this.farmLoading$ = this.store.select(fromStore.getFarmLoading);
    this.isChart$ = this.store.select(fromStore.getIsChart);
  }

  farmSelect(id: number) {
    if (typeof id === 'number') {
      this.store.dispatch(new fromStore.SetFarmId(Number(id)));
    }
  }

  loadFarm() {
    this.store.dispatch(new fromStore.LoadFarm());
  }

  setViewoption(isChart: boolean) {
    this.store.dispatch(new fromStore.SetIsChart(isChart));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
