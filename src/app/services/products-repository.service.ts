import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsRepositoryService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${environment.urls.productsApiUri}`);
  }

  public getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>(`${environment.urls.productsApiUri}/${id}`);
  }

  public createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(`${environment.urls.productsApiUri}`, product);
  }

  public updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${environment.urls.productsApiUri}/${product.id}`, product);
  }
}
