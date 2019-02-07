import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { catchError } from 'rxjs/internal/operators';
import { delay } from 'rxjs/internal/operators';
import { take } from 'rxjs/internal/operators';

import { Farm, FarmData } from '../models';
import environment from '../../app.environment';

@Injectable()
export class DataService {
  private url: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getFarms(): Observable<Farm[]> {
    return this.http.get<Farm[]>(`${this.url}/farms`)
      .pipe(
        delay(2000),
        take(1),
        catchError((err: any) => console.log(err.json())));
  }

  getFarmById(id: number): Observable<FarmData> {
    return this.http.get<FarmData>(`${this.url}/farmsData?farmId=${id}`)
      .pipe(
        delay(2000),
        take(1),
        catchError((err: any) => console.log(err.json())));
  }
}