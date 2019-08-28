import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {SalesPerson} from '../models/SalesPerson';

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

  public createSalesPerson(salesPerson: SalesPerson): Observable<SalesPerson> {
    return this.httpClient.post<SalesPerson>(`${environment.urls.salesPersonsApiUri}`, salesPerson);
  }

  public updateSalesPerson(salesPerson: SalesPerson): Observable<SalesPerson> {
    return this.httpClient.put<SalesPerson>(`${environment.urls.salesPersonsApiUri}/${salesPerson.id}`, salesPerson);
  }

}
