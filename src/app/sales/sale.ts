import {SalesPerson} from '../sales-persons/SalesPerson';
import {Customer} from '../customers/customer';
import {Product} from '../products/product';

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
