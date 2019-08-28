import { Component, OnInit } from '@angular/core';
import {Discount} from './discount';
import {DiscountsRepositoryService} from './discounts-repository.service';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {

  public discounts: Discount[];
  private discountsRepository: DiscountsRepositoryService;

  constructor(discountsRepository: DiscountsRepositoryService) {
    this.discountsRepository = discountsRepository;
  }

  ngOnInit() {
    this.discountsRepository.getDiscounts().subscribe(discounts => this.discounts = discounts);
  }

}
