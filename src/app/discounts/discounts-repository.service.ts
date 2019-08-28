import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Discount} from './discount';

@Injectable({
  providedIn: 'root'
})
export class DiscountsRepositoryService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getDiscounts(): Observable<Discount[]> {
    return this.httpClient.get<Discount[]>(`${environment.urls.discountsApiUri}`);
  }
}
