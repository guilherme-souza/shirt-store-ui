import { Component, OnInit } from '@angular/core';
import { Shirt } from '../shirt';
import { ShirtService } from '../shirt.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  constructor(private shirtService: ShirtService,
    private cartService: CartService,
    private router: Router) { }

  shirt: Shirt;

  ngOnInit() {
    this.shirt = this.shirtService.selectedShirt;

    if (!this.shirt) {
      this.router.navigate([`/list`]);
    }
  }

  addToCart(shirt: Shirt): void {
    this.cartService.addItem(shirt);
  }

  getButtonLabel(): string {
    if (this.cartService.cartItems) {
      const ind: number = this.getIndexOfShirt();

      if (ind >= 0) {
        return 'Add one more';
      }
    }

    return 'Add shirt';
  }

  private getIndexOfShirt(): number {
    return this.cartService.cartItems.findIndex(item => {
      return item.id === this.shirt.id;
    });
  }
}
