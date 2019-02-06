import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/index';
import { of } from 'rxjs/index';

@Injectable()
export class ReportGuard implements CanActivate {
  constructor() {}
  canActivate(): Observable<boolean> {
    return of(true);
  }
}
