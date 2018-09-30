import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { Shirt } from '../shirt';
import { ShirtService } from '../shirt.service';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

class MockShirtService {
  selectedShirt: Shirt = {
    id: 1,
    price: 10,
    picture: '',
    colour: 'Black',
    size: 'L',
    name: 'Cool Shirt',
    quantity: 2
  };
}

class MockCartService {
  cartItems: any;
  addItem(shirt: Shirt) {}
}

class MockRouter {
  navigate(link: string) {}
}

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  let shirtService: ShirtService;
  let cartService: CartService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComponent ],
      providers: [
        { provide: ShirtService, useClass: MockShirtService },
        { provide: CartService, useClass: MockCartService },
        { provide: Router, useClass: MockRouter }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    shirtService = TestBed.get(ShirtService);
    cartService = TestBed.get(CartService);
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Button to add to cart', () => {
    it('should display label Add shirt if no shirt is added to cart', () => {
      expect(component.getButtonLabel()).toBe('Add shirt');
    });

    it('should display label Add shirt when selected shirt is added to cart', () => {
      cartService.cartItems = [{
        id: 2,
        price: 10,
        picture: '',
        colour: 'Black',
        size: 'L',
        name: 'A Different Cool Shirt',
        quantity: 2
      }];

      expect(component.getButtonLabel()).toBe('Add shirt');
    });

    it('should display label Add one more when selected shirt is already added to cart', () => {
      cartService.cartItems = [{
        id: 1,
        price: 10,
        picture: '',
        colour: 'Black',
        size: 'L',
        name: 'Cool Shirt',
        quantity: 2
      }];

      expect(component.getButtonLabel()).toBe('Add one more');
    });
  });
});
