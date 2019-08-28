import { Component, OnInit } from '@angular/core';
import {SalesRepositoryService} from '../services/sales-repository.service';
import {Sale} from '../models/sale';

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.css']
})
export class SalesFormComponent implements OnInit {

  public sale: Sale;
  private salesRepository: SalesRepositoryService;

  constructor(salesRepository: SalesRepositoryService) {
    this.salesRepository = salesRepository;
  }

  ngOnInit() {
  }

  public submit() {
    if (this.sale.id === 0) {
      this.salesRepository.createSale(this.sale).subscribe();
    } else {
      this.salesRepository.updateSale(this.sale).subscribe();
    }
  }
}
