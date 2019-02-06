import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, metaReducers, effects } from './store';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// services

// guards
import * as fromGuards from './guards';

// roots
import { FarmPerformanceReportRoutingModule } from './farm-performance-report.routing';

@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot(effects),
    FarmPerformanceReportRoutingModule
  ],
  providers: [...fromGuards.guards],
  exports: [...fromContainers.containers, ...fromComponents.components]
})
export class FarmPerformanceReportModule { }
