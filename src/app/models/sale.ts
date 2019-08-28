import {SalesPerson} from './SalesPerson';
import {Customer} from './customer';
import {Product} from './product';

export class Sale {
  public id: number;
  public productId: number;
  public product: Product;
  public salesPersonId: number;
  public salesPerson: SalesPerson;
  public customerId: number;
  public customer: Customer;
  public salesDate: Date;
}
