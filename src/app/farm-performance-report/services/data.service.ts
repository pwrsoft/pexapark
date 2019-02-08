import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { catchError, delay, take, map } from 'rxjs/internal/operators';

import { Farm, FarmData } from '../models';
import environment from '../../app.environment';
import { of } from 'rxjs/index';

@Injectable()
export class DataService {
  private url: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getFarms(): Observable<any> {
    return this.http.get<any>(`${this.url}/farms`)
      .pipe(
        delay(2000),
        take(1),
        catchError((err: any) => of(console.log(err.json()))));
  }

  getFarmById(id: number): Observable<FarmData> {
    return this.http.get<FarmData>(`${this.url}/farmsData?farmId=${id}`)
      .pipe(
        delay(2000),
        take(1),
        map(res => res[0]),
        catchError((err: any) => of(console.log(err.json()))));
  }
}
