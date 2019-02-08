import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, Observable } from 'rxjs/index';

import { FarmData } from '../../models';
import * as fromStore from '../../store';

@Component({
  selector: 'app-table-report',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tableReport.component.html',
  styleUrls: ['./tableReport.component.scss'],
})
export class TableReportComponent implements OnInit, OnDestroy {

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
