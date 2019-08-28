import {Component, OnInit} from '@angular/core';
import {ReportsRepositoryService} from '../services/reports-repository.service';
import {SalesPersonCommission} from '../models/salesPersonCommission';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  public year = 2019;
  public years = [2019, 2018, 2017];
  public quarter = 1;
  public quarters = [1, 2, 3, 4];
  public commissions: SalesPersonCommission[] = [];
  private reportsRepository: ReportsRepositoryService;

  constructor(salesPersonsRepository: ReportsRepositoryService) {
    this.reportsRepository = salesPersonsRepository;
  }

  ngOnInit() {
    this.runReport();
  }

  public updateParams(year: number, quarter: number) {
    this.year = year;
    this.quarter = quarter;

    this.runReport();
  }

  private runReport() {
    this.reportsRepository.getQuarterlySalesCommission(this.year, this.quarter).subscribe(commissions => this.commissions = commissions);
  }
}
