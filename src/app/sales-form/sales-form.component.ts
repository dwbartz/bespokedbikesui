import {Component, OnInit} from '@angular/core';
import {SalesRepositoryService} from '../services/sales-repository.service';
import {Sale} from '../models/sale';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sales-form',
  templateUrl: './sales-form.component.html',
  styleUrls: ['./sales-form.component.css']
})
export class SalesFormComponent implements OnInit {

  public sale: Sale = new Sale();

  constructor(
    private salesRepository: SalesRepositoryService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.saleId && params.saleId > 0) {
        this.getSale(params.saleId);
      } else {
        this.sale = new Sale();
      }
    });
  }

  private getSale(id: number) {
    this.salesRepository.getSale(id).subscribe(sale => this.sale = sale);
  }

  public submit() {
    if (this.sale.id === 0) {
      this.salesRepository.createSale(this.sale).subscribe();
    } else {
      this.salesRepository.updateSale(this.sale).subscribe();
    }
  }
}
