import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// material
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatButtonModule } from '@angular/material';

// highcharts
import { ChartModule } from 'angular-highcharts';

import { reducers, metaReducers, effects } from './store';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// services
import * as fromServices from './services';

// guards
import * as fromGuards from './guards';

// roots
import { FarmPerformanceReportRoutingModule } from './farm-performance-report.routing';

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot(effects),
    FarmPerformanceReportRoutingModule,
    // material
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    // highcharts
    ChartModule
  ],
  providers: [...fromGuards.guards, ...fromServices.services],
  exports: [...fromContainers.containers, ...fromComponents.components]
})
export class FarmPerformanceReportModule { }
