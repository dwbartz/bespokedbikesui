import {Injectable} from '@angular/core';
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

  public getSales(startDate: Date, endDate: Date): Observable<Sale[]> {
    const url = new URL(environment.urls.salesApiUri);

    if (startDate) {
      url.searchParams.append('startDate', startDate.toDateString());
    }

    if (endDate) {
      url.searchParams.append('startDate', endDate.toDateString());
    }

    return this.httpClient.get<Sale[]>(url.href);
  }
}
