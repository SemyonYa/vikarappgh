import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';
import { CartService } from 'src/app/_services/cart.service';
import { Good } from 'src/app/_models/good';
import { BehaviorSubject } from 'rxjs';
import { DataService } from 'src/app/_services/data.service';
import { ICartItem } from 'src/app/_models/i-cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  goods: Good[] = [];
  sum = 0;
  constructor(private menuService: MenuService, private cartService: CartService, private dataService: DataService) { }

  ngOnInit() {
    const cartItems: ICartItem[] = this.cartService.getCart();
    cartItems.forEach(
      (i: ICartItem) => {
        this.dataService.getGood(i.id)
          .subscribe(
            (g: Good) => {
              g.setQuantity(i.quantity);
              this.goods.push(g);
              this.sum += g.getSum();
            }
          );
      }
    );
    this.menuService.isFirstPage.next(false);
  }

  clear() {
    this.cartService.setCart([]);
  }

  submit() {
    alert('submit order');
  }

  cartMinus(e: MouseEvent) {
    this.cartService.minus(e);
  }

  cartPlus(e: MouseEvent) {
    this.cartService.plus(e);
  }
}
