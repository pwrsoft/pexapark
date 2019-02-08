import { Component, OnInit, OnChanges, ChangeDetectionStrategy, Input, SimpleChanges } from '@angular/core';

import { FarmData, ReportItem } from '../../models';

@Component({
  selector: 'app-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {

  @Input() data: FarmData;

  displayedColumns: string[] = ['month', 'budget', 'realized'];
  farmData: ReportItem[] = [];

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.data) {
      this.farmData = this.data && this.data.report;
    }
  }
}
