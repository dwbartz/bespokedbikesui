import { Component, OnInit } from '@angular/core';
import {SalesPersonsRepositoryService} from './sales-persons-repository.service';
import {SalesPerson} from './SalesPerson';

@Component({
  selector: 'app-sales-persons',
  templateUrl: './sales-persons.component.html',
  styleUrls: ['./sales-persons.component.css']
})
export class SalesPersonsComponent implements OnInit {

  public salesPeople: SalesPerson[] = [];
  private salesPersonsRepository: SalesPersonsRepositoryService;

  constructor(salesPersonsRepository: SalesPersonsRepositoryService) {
    this.salesPersonsRepository = salesPersonsRepository;

  }

  ngOnInit() {
    this.salesPersonsRepository.getSalesPersons().subscribe(salesPersons => this.salesPeople = salesPersons);
  }


}
