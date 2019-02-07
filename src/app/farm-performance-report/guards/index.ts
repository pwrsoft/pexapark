import { ReportGuard } from './report.guard';
import { FarmsGuard } from './farms.guard';

export const guards: any[] = [ReportGuard, FarmsGuard];

export * from './report.guard';
export * from './farms.guard';
