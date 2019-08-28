import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {SalesPersonCommission} from '../models/salesPersonCommission';

@Injectable({
  providedIn: 'root'
})
export class ReportsRepositoryService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getQuarterlySalesCommission(year: number, quarter: number): Observable<SalesPersonCommission[]> {
    return this.httpClient.get<SalesPersonCommission[]>(
      `${environment.urls.reportsApiUri}/SalesPersonCommission?year=${year}&quarter=${quarter}`);
  }
}
