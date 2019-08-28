import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {SalesPerson} from './SalesPerson';

@Injectable({
  providedIn: 'root'
})
export class SalesPersonsRepositoryService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getSalesPersons(): Observable<SalesPerson[]> {
    return this.httpClient.get<SalesPerson[]>(`${environment.urls.salesPersonsApiUri}`);
  }
}
