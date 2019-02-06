import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/index';

import { State } from '../../store/reducers';

@Component({
  selector: 'chart-report',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chartReport.component.html',
  styleUrls: ['./chartReport.component.scss'],
})
export class ChartReportComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private store: Store<State>,
  ) { }

  ngOnInit() {}

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
