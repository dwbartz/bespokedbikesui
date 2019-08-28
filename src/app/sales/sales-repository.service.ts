import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Sale} from './sale';

@Injectable({
  providedIn: 'root'
})
export class SalesRepositoryService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getSales(): Observable<Sale[]> {
    return this.httpClient.get<Sale[]>(`${environment.urls.salesApiUri}`);
  }
}
