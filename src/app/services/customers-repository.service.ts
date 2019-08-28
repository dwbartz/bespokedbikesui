import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Customer} from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersRepositoryService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${environment.urls.customersApiUri}`);
  }
}

