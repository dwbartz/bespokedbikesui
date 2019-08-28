import { Component, OnInit } from '@angular/core';
import {CustomersRepositoryService} from './customers-repository.service';
import {Customer} from './customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public customers: Customer[] = [];
  private customersRepository: CustomersRepositoryService;

  constructor(customersRepository: CustomersRepositoryService) {
    this.customersRepository = customersRepository;

  }

  ngOnInit() {
    this.customersRepository.getCustomers().subscribe(customers => this.customers = customers);
  }

}
