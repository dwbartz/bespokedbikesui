import {Component, OnInit} from '@angular/core';
import {SalesPersonsRepositoryService} from '../services/sales-persons-repository.service';
import {SalesPerson} from '../models/SalesPerson';

@Component({
  selector: 'app-sales-persons-form',
  templateUrl: './sales-persons-form.component.html',
  styleUrls: ['./sales-persons-form.component.css']
})
export class SalesPersonsFormComponent implements OnInit {
  public salesPerson: SalesPerson;
  private salesPersonsRepository: SalesPersonsRepositoryService;

  constructor(salesPersonsRepository: SalesPersonsRepositoryService) {
    this.salesPersonsRepository = salesPersonsRepository;
  }

  ngOnInit() {

  }

  public submit() {
    if (this.salesPerson.id === 0) {
      this.salesPersonsRepository.createSalesPerson(this.salesPerson).subscribe();
    } else {
      this.salesPersonsRepository.updateSalesPerson(this.salesPerson).subscribe();
    }
  }

}
