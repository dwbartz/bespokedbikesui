import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ProductsRepositoryService} from '../services/products-repository.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  public product: Product = new Product();

  constructor(
    private productsRepository: ProductsRepositoryService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.productId && params.productId > 0) {
        this.getProduct(params.productId);
      } else {
        this.product = new Product();
      }
    });
  }

  public getProduct(id: number) {
    this.productsRepository.getProduct(id).subscribe(product => this.product = product);
  }

  public submit() {
    if (!this.product.id) {
      this.productsRepository.createProduct(this.product).subscribe();
    } else {
      this.productsRepository.updateProduct(this.product).subscribe();
    }
  }
}
