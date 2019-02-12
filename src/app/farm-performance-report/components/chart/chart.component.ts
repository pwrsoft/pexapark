import { Component, OnInit, OnChanges, ChangeDetectionStrategy, Input, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';

import { FarmData } from '../../models';

@Component({
  selector: 'app-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() data: FarmData;
  chart: Chart;
  options: any =  {
    chart: {
      type: 'column'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: []
    },
    yAxis: {
      min: 0,
      title: {
        text: 'MWh'
      }
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: []
  };

  constructor() { }

  ngOnInit() {
    this.chart = new Chart(this.options);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.data && changes.data.currentValue) {
      const budgedValues = changes.data.currentValue.report.map( item => item.budget);
      const realizedValues = changes.data.currentValue.report.map( item => item.realized);
      const categories = changes.data.currentValue.report.map( item => item.month);
      const name = `${changes.data.currentValue.name} Performance`;

      this.options.name = name;
      this.options.categories = categories;
      this.options.name = name;
      this.options.series = [
        {
          type: 'column',
          name: 'Budget',
          data: budgedValues
        },
        {
          type: 'column',
          name: 'Realized',
          data: realizedValues
        }
      ];
      this.chart = new Chart(this.options);
    }
  }
}
