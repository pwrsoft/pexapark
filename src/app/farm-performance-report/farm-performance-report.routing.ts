import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './containers/report/report.component';
import { ChartReportComponent } from './containers/chartReport/chartReport.component';
import { TableReportComponent } from './containers/tableReport/tableReport.component';
import { FarmsGuard } from './guards';

export const routes: Routes = [
  { path: '',  canActivate: [FarmsGuard], component: ReportComponent,
    children: [
      { path: 'chart/:id', component: ChartReportComponent },
      { path: 'table/:id', component: TableReportComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FarmPerformanceReportRoutingModule { }
