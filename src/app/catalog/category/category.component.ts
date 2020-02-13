import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category';
import { DataService } from 'src/app/_services/data.service';
import { CartService } from 'src/app/_services/cart.service';
import { Good } from 'src/app/_models/good';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category: Category;
  // filter: number;
  // categoryN: number;
  constructor(private dataService: DataService, private cartService: CartService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const categoryN = this.activatedRoute.snapshot.params.categoryId;
    console.log('cId', categoryN);
    this.dataService.categories$
      .subscribe(
        (data: Category[]) => {
          console.log('data', data);
          if (data.length > 0) {
            const cartItems = this.cartService.cart$.value;
            this.category = data.find(c => c.n == categoryN);
            this.category.goodGroups.forEach(gg => {
              gg.goods.forEach(g => {
                const currentItem = cartItems.find(i => i.id == g.id);
                if (currentItem !== undefined) {
                  g.quantity = currentItem.quantity;
                }
              });
            });
          }
        }
      );
    // this.filter = 0;
  }

  // filtering(n) {
  //   this.filter = 100;
  //   this.filter = n;
  // }


  minus(good: Good) {
    good.decrement();
    this.cartService.minus(good.id);
  }

  plus(good: Good) {
    good.increment();
    this.cartService.plus(good.id);
  }

  // segmentChanged(e) {
  //   console.log('TCL: CatalogComponent -> segmentChanged -> e', e);
  // }

  // qwe(n) {
  //   console.log('TCL: CatalogComponent -> qwe -> n', n);
  // }

}
