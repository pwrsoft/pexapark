export interface ReportItem {
  month: string;
  budget: number;
  realized?: number;
}

export interface FarmData {
  id: number;
  farmId: number;
  name: string;
  report: ReportItem[];
}
