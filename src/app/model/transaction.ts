import {Product} from './product';
import {User} from './user';
export class Transaction {
  id:number | undefined;
  product: Product = new Product;
  user: User = new User;
  purchaseDate: any;
}