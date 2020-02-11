import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';
import { CartService } from 'src/app/_services/cart.service';
import { Good } from 'src/app/_models/good';
import { DataService } from 'src/app/_services/data.service';
import { ICartItem } from 'src/app/_models/i-cart-item';
import { BehaviorSubject } from 'rxjs';
import { Category } from 'src/app/_models/category';
import { inAnimation } from 'src/app/_animations/in.animation';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  animations: [inAnimation]
})
export class CartComponent implements OnInit {
  goods: Good[] = [];
  sum = 0;
  constructor(private cartService: CartService, private dataService: DataService) { }

  ngOnInit() {
    const cartitems = this.cartService.cart$.value;
    this.dataService.categories$
      .subscribe(
        (data: Category[]) => {
          data.forEach(c => {
            c.goodGroups.forEach(gg => {
              gg.goods.forEach(g => {
                const item = cartitems.find(i => i.id == g.id);
                if (item !== undefined) {
                  g.quantity = item.quantity;
                  this.goods.push(g);
                }
              });
            });
          });
        }
      );
  }

  clear() {
    this.cartService.clear();
  }

  submit() {
    alert('submit order');
  }

  minus(good: Good) {
    good.decrement();
    if (good.quantity === 0) {
      this.goods.splice(this.goods.findIndex(g => g.id == good.id), 1);
    }
    this.cartService.minus(good.id);
  }

  plus(good: Good) {
    good.increment();
    this.cartService.plus(good.id);
  }
}
