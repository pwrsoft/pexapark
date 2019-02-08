import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, Observable } from 'rxjs/index';

import { FarmData } from '../../models';
import * as fromStore from '../../store';

@Component({
  selector: 'app-chart-report',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chartReport.component.html',
  styleUrls: ['./chartReport.component.scss'],
})
export class ChartReportComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  selectedFarm$: Observable<FarmData>;

  constructor(
    private store: Store<fromStore.State>,
  ) { }

  ngOnInit() {
    this.selectedFarm$ = this.store.select(fromStore.getFarm);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
