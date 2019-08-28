import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { ProductsComponent } from './products/products.component';
import { ReportsComponent } from './reports/reports.component';
import { SalesComponent } from './sales/sales.component';
import { SalesPersonsComponent } from './sales-persons/sales-persons.component';
import {HttpClientModule} from '@angular/common/http';
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { SalespersonsFormComponent } from './salespersons-form/salespersons-form.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { SalesFormComponent } from './sales-form/sales-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    DiscountsComponent,
    ProductsComponent,
    ReportsComponent,
    SalesComponent,
    SalesPersonsComponent,
    SalespersonsFormComponent,
    ProductFormComponent,
    SalesFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbDropdownModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
