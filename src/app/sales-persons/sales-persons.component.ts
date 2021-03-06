import { Component, OnInit } from '@angular/core';
import {SalesPersonsRepositoryService} from '../services/sales-persons-repository.service';
import {SalesPerson} from '../models/SalesPerson';

@Component({
  selector: 'app-sales-persons',
  templateUrl: './sales-persons.component.html',
  styleUrls: ['./sales-persons.component.css']
})
export class SalesPersonsComponent implements OnInit {

  public salesPeople: SalesPerson[] = [];

  constructor(
    private salesPersonsRepository: SalesPersonsRepositoryService) {
  }

  ngOnInit() {
    this.salesPersonsRepository.getSalesPersons().subscribe(salesPersons => this.salesPeople = salesPersons);
  }


}
