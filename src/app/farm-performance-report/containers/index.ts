import { ReportComponent} from './report/report.component';
import { ChartReportComponent } from './chartReport/chartReport.component';
import { TableReportComponent } from './tableReport/tableReport.component';

export const containers: any[] = [ReportComponent, ChartReportComponent, TableReportComponent];

export * from './report/report.component';
export * from './chartReport/chartReport.component';
export * from './tableReport/tableReport.component';
