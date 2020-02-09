import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';
import { CartService } from 'src/app/_services/cart.service';
import { Good } from 'src/app/_models/good';
import { DataService } from 'src/app/_services/data.service';
import { ICartItem } from 'src/app/_models/i-cart-item';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  // goods$: BehaviorSubject<Good[]> = new BehaviorSubject<Good[]>([]);
  goods: Good[] = [];
  sum = 0;
  constructor(private menuService: MenuService, private cartService: CartService, private dataService: DataService) { }

  ngOnInit() {
    this.cartService.cart$
      .subscribe(
        (data: ICartItem[]) => {
          this.goods = [];
          data.forEach(
            (i: ICartItem) => {
              this.dataService.getGood(i.id)
                .subscribe(
                  (g: Good) => {
                    g.setQuantity(i.quantity);
                    this.goods.push(g);
                    this.goods.sort((a, b) => a.id - b.id);
                    // this.goods$.next();
                    this.sum += g.getSum();
                  }
                );
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
