import {Component, OnInit} from '@angular/core';
import {SalesPersonsRepositoryService} from '../services/sales-persons-repository.service';
import {SalesPerson} from '../models/SalesPerson';
import {Sale} from '../models/sale';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sales-persons-form',
  templateUrl: './sales-persons-form.component.html',
  styleUrls: ['./sales-persons-form.component.css']
})
export class SalesPersonsFormComponent implements OnInit {
  public salesPerson: SalesPerson = new SalesPerson();

  constructor(
    private salesPersonsRepository: SalesPersonsRepositoryService,
    private route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.salesPersonId && params.salesPersonId > 0) {
        this.getSalesPerson(params.salesPersonId);
      } else {
        this.salesPerson = new SalesPerson();
      }
    });
  }

  private getSalesPerson(id: number) {
    this.salesPersonsRepository.getSalesPerson(id).subscribe(salesPerson => this.salesPerson = salesPerson);
  }

  public submit() {
    if (this.salesPerson.id === 0) {
      this.salesPersonsRepository.createSalesPerson(this.salesPerson).subscribe();
    } else {
      this.salesPersonsRepository.updateSalesPerson(this.salesPerson).subscribe();
    }
  }

}
