import { Component, OnInit } from '@angular/core';
import { Good } from '../_models/good';
import { Category } from '../_models/category';
import { DataService } from '../_services/data.service';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {
  categories: Category[] = [];
  filter: number;
  constructor(private dataService: DataService, private cartService: CartService) { }

  ngOnInit() {
    this.dataService.categories$
      .subscribe(
        (data: Category[]) => {
          this.categories = data;
          const cartItems = this.cartService.cart$.value;
          data.forEach(c => {
            c.goodGroups.forEach(gg => {
              gg.goods.forEach(g => {
                const currentItem = cartItems.find(i => i.id == g.id);
                if (currentItem !== undefined) {
                  g.quantity = currentItem.quantity;
                }
              });
            });
          });
        }
      );
    this.filter = 0;
  }

  filtering(n) {
    this.filter = 100;
    this.filter = n;
  }


  minus(good: Good) {
    good.decrement();
    this.cartService.minus(good.id);
  }

  plus(good: Good) {
    good.increment();
    this.cartService.plus(good.id);
  }

  segmentChanged(e) {
    console.log('TCL: CatalogComponent -> segmentChanged -> e', e);
  }

  qwe(n) {
    console.log('TCL: CatalogComponent -> qwe -> n', n);
  }
}
