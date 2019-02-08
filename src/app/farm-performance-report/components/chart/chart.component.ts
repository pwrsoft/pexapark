import { Component, OnInit, OnChanges, ChangeDetectionStrategy, Input, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';

import { FarmData } from '../../models';

const CHART_OPTIONS = {
  chart: {
    type: 'line'
  },
  title: {
    text: 'Farm performance'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
  },
  yAxis: {
    title: {
      text: '$'
    }
  },
  plotOptions: {
    line: {
      dataLabels: {
        enabled: true
      },
      enableMouseTracking: false
    }
  }
};

@Component({
  selector: 'app-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() data: FarmData;
  chart: Chart;

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.data && changes.data.currentValue) {
      this.chart = new Chart(CHART_OPTIONS);

      const series = [
        {
          name: 'Budget',
          data: changes.data.currentValue.report.map( item => item.budget)
        },
        {
          name: 'Realized',
          data: changes.data.currentValue.report.map( item => item.realized)
        }
      ];
      this.chart.addSeries(series);
    }
  }
}
