import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/index';
//import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, OnDestroy {
  /*chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
      }
    ]
  });*/

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
