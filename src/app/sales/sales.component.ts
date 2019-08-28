import {Component, OnInit} from '@angular/core';
import {SalesRepositoryService} from './sales-repository.service';
import {Sale} from './sale';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  public startDate: Date;
  public endDate: Date;
  public sales: Sale[] = [];
  private salesRepository: SalesRepositoryService;

  constructor(salesRepository: SalesRepositoryService) {
    this.salesRepository = salesRepository;
  }

  ngOnInit() {
    this.getData();
  }

  setStartDate($event: NgbDate) {
    this.startDate = new Date($event.year, $event.month, $event.day);
    this.getData();
  }

  setEndDate($event: NgbDate) {
    this.endDate = new Date($event.year, $event.month, $event.day);
    this.getData();
  }

  private getData() {
    this.salesRepository.getSales(this.startDate, this.endDate).subscribe(sales => this.sales = sales);
  }
}
