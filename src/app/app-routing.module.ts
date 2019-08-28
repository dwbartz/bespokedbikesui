import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {DiscountsComponent} from './discounts/discounts.component';
import {ProductsComponent} from './products/products.component';
import {ReportsComponent} from './reports/reports.component';
import {SalesComponent} from './sales/sales.component';
import {SalesPersonsComponent} from './sales-persons/sales-persons.component';
import {SalesPersonsFormComponent} from './sales-persons-form/sales-persons-form.component';
import {SalesFormComponent} from './sales-form/sales-form.component';
import {ProductsFormComponent} from './products-form/products-form.component';


const routes: Routes = [
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'discounts',
    component: DiscountsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'sales-persons',
    component: SalesPersonsComponent
  },
  {
    path: 'sales-persons/:salesPersonId',
    component: SalesPersonsFormComponent
  },
  {
    path: 'products/:productId',
    component: ProductsFormComponent
  },
  {
    path: 'sales/:saleId',
    component: SalesFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
