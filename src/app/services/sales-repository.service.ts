import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Sale} from '../models/sale';

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
      url.searchParams.append('endDate', endDate.toDateString());
    }

    return this.httpClient.get<Sale[]>(url.href);
  }

  public getSale(id: number): Observable<Sale> {
    return this.httpClient.get<Sale>(`${environment.urls.salesApiUri}/${id}`);
  }

  public createSale(sale: Sale): Observable<Sale> {
    return this.httpClient.post<Sale>(`${environment.urls.salesApiUri}`, sale);
  }

  public updateSale(sale: Sale): Observable<Sale> {
    return this.httpClient.put<Sale>(`${environment.urls.salesApiUri}/${sale.id}`, sale);
  }
}
