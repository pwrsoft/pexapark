import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './containers/report/report.component';
import { ChartReportComponent } from './containers/chartReport/chartReport.component';
import { TableReportComponent } from './containers/tableReport/tableReport.component';
import { ReportGuard } from './guards/report.guard';

export const routes: Routes = [
  { path: '', canActivate: [ReportGuard], component: ReportComponent },
  { path: 'chart/:id', canActivate: [ReportGuard], component: ChartReportComponent },
  { path: 'table/:id', canActivate: [ReportGuard], component: TableReportComponent }
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
