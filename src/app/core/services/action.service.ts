import { Injectable } from '@angular/core';
import { Book } from '../model/book.model';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Injectable()
export class ActionService {

  constructor(
    public cart: CartService,
    private router: Router
  ) { }

  buyBook(book: Book) {
      this.cart.add(book, 1);
      this.router.navigate(['/cart/content']);
  }
}
