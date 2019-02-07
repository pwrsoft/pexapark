import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/index';
import { of } from 'rxjs/index';
import { switchMap, catchError, tap } from 'rxjs/internal/operators';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';

@Injectable()
export class FarmsGuard implements CanActivate {
  constructor(private store: Store<fromStore.State>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore().pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getFarmsLoaded).pipe(
      tap((loaded: boolean)  => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadFarms());
        }
      })
    );
  }
}
