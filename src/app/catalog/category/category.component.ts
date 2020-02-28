import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category';
import { DataService } from 'src/app/_services/data.service';
import { CartService } from 'src/app/_services/cart.service';
import { Good } from 'src/app/_models/good';
import { ActivatedRoute } from '@angular/router';
import { inAnimation } from 'src/app/_animations/in.animation';
import { ModalController } from '@ionic/angular';
import { CategoryInfoComponent } from '../category-info/category-info.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [inAnimation]
})
export class CategoryComponent implements OnInit {
  category: Category;
  // tslint:disable-next-line:max-line-length
  constructor(private dataService: DataService, private cartService: CartService, private activatedRoute: ActivatedRoute, private modalController: ModalController) { }

  ngOnInit() {
    const categoryN = this.activatedRoute.snapshot.params.categoryId;
    this.dataService.categories$
      .subscribe(
        (data: Category[]) => {
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
  }

  minus(good: Good) {
    good.decrement();
    this.cartService.minus(good.id);
  }

  plus(good: Good) {
    good.increment();
    this.cartService.plus(good.id);
  }

  async showInfo(category: Category) {
    const modal = this.modalController.create({
      component: CategoryInfoComponent,
      componentProps: { category }
    });
    return (await modal).present();
  }
}
