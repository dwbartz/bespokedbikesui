import { Component, OnInit } from '@angular/core';
import {ProductsRepositoryService} from './products-repository.service';
import {Product} from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[] = [];
  private productsRepository: ProductsRepositoryService;

  constructor(productsRepository: ProductsRepositoryService) {
    this.productsRepository = productsRepository;
  }

  ngOnInit() {
    this.productsRepository.getProducts().subscribe(products => this.products = products);
  }

}
