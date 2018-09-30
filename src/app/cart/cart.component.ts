import { Component, OnInit, Inject } from '@angular/core';
import { Shirt } from '../shirt';
import { CartService } from '../cart.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
import { ModalService } from '../modal.service';

const STORAGE_NAME = 'local_shoppingCart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  shoppingCart: Shirt[];

  constructor(@Inject(SESSION_STORAGE) private storageService: StorageService,
                                       private cartService: CartService,
                                       private modalService: ModalService) { }

  ngOnInit() {
    // Check in local storage and set the stored items in cartService
    this.shoppingCart = this.storageService.get(STORAGE_NAME) || [];
    this.cartService.cartItems = this.shoppingCart;

    this.cartService.change.subscribe(cartItems => {
      this.shoppingCart = cartItems;
      this.storageService.set(STORAGE_NAME, this.shoppingCart); // store in local storage
    });
  }

  openModal(id: string) {
    this.modalService.openModal(id);
  }

  getTotalPrice(): number {
    if (!this.shoppingCart) {
      return 0;
    }

    // Using reduce to sum all prices in the array
    return this.shoppingCart.reduce(function (total, item) {
      return total + item.price;
    }, 0);
  }

  removeItem(shirt: Shirt): void {
    this.cartService.removeItem(shirt);
  }
}
