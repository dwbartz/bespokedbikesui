import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ProductsRepositoryService} from '../services/products-repository.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  public product: Product;
  private productsRepository: ProductsRepositoryService;

  constructor(productsRepository: ProductsRepositoryService) {
    this.productsRepository = productsRepository;
  }

  ngOnInit() {
  }

  public submit() {
    if (this.product.id === 0) {
      this.productsRepository.createProduct(this.product).subscribe();
    } else {
      this.productsRepository.updateProduct(this.product).subscribe();
    }
  }
}
