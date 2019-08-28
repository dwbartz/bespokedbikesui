import { Component, OnInit } from '@angular/core';
import {SalesRepositoryService} from './sales-repository.service';
import {Sale} from './sale';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  public sales: Sale[] = [];
  private salesRepository: SalesRepositoryService;

  constructor(salesRepository: SalesRepositoryService) {
    this.salesRepository = salesRepository;
  }

  ngOnInit() {
    this.salesRepository.getSales().subscribe(sales => this.sales = sales);
  }

}
