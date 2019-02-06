import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/index';

import { State } from '../../store/reducers';

@Component({
  selector: 'table-report',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tableReport.component.html',
  styleUrls: ['./tableReport.component.scss'],
})
export class TableReportComponent implements OnInit, OnDestroy {

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
