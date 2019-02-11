import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { FarmData } from '../../models';

@Component({
  selector: 'app-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {

  @Input() data: FarmData;

  displayedColumns: string[] = ['month', 'budget', 'realized'];

  constructor() { }
}
