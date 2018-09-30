import { Injectable, Output, EventEmitter } from '@angular/core';
import { Shirt } from './shirt';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Shirt[];

  @Output() change: EventEmitter<Shirt[]> = new EventEmitter();

  constructor() { }

  addItem(shirt: Shirt): void {
    if (!this.cartItems) {
      this.cartItems = [];
    }

    this.cartItems.push(shirt);
    this.change.emit(this.cartItems);
  }

  removeItem(shirt: Shirt): void {
    if (this.cartItems) {
      const index = this.cartItems.lastIndexOf(shirt);

      if (index >= 0) {
        this.cartItems.splice(index, 1);
      }
    }
  }
}
