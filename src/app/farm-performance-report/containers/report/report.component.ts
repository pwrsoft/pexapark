import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs/index';
import { Router } from '@angular/router';

import { Farm, FarmData } from '../../models';
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
  selectedFarm$: Observable<FarmData>;

  farmId: number = null;
  isChart: boolean = true;

  constructor(private store: Store<fromStore.State>,
              private router: Router
  ) { }

  ngOnInit() {
    this.farms$ = this.store.select(fromStore.getFarms);
    this.farmsLoading$ = this.store.select(fromStore.getFarmsLoading);
    this.farmLoading$ = this.store.select(fromStore.getFarmLoading);
    this.isChart$ = this.store.select(fromStore.getIsChart);
    this.selectedFarm$ = this.store.select(fromStore.getFarm);
  }

  farmSelect(id: number) {
    if (typeof id === 'number') {
      this.farmId = id;
      this.store.dispatch(new fromStore.SetFarmId(Number(id)));
    }
  }

  loadFarm() {
    this.navigate();
    this.store.dispatch(new fromStore.LoadFarm());
  }

  setPresentationOption(isChart: boolean) {
    this.isChart = isChart;
    this.store.dispatch(new fromStore.SetIsChart(isChart));
  }

  navigate() {
    const presentationOption = this.isChart ? 'chart' : 'table';
    this.router.navigate([`/report/${presentationOption}/${this.farmId}`]);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
