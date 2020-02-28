import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';
import { InstallItem } from 'src/app/_models/install-item';
import { ActivatedRoute } from '@angular/router';
import { InstallItemGood } from 'src/app/_models/install-item-good';
import { AlertController } from '@ionic/angular';
import { CartService } from 'src/app/_services/cart.service';
import { ICartItem } from '../../../_models/i-cart-item';

@Component({
  selector: 'app-installing-item',
  templateUrl: './installing-item.component.html',
  styleUrls: ['./installing-item.component.scss'],
})
export class InstallingItemComponent implements OnInit {
  id: number;
  installItem: InstallItem;
  // cartItems: ICartItem[] = [];
  // tslint:disable-next-line:max-line-length
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private alertController: AlertController, private cartService: CartService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.dataService.installItems$
      .subscribe(
        (data: InstallItem[]) => {
          this.installItem = data.find(ii => ii.id == this.id);
          console.log('TCL: InstallingItemComponent -> ngOnInit -> this.installItem', this.installItem);
        }
      );
  }

  async groupToCart() {
    const alert = await this.alertController.create({
      header: 'Действительно добавить группу товаров в корзину?',
      message: 'Ранее добавленные товары будут удалены из корзины.',
      buttons: [
        {
          text: 'Отменить',
          role: 'cancel',
          cssClass: 'text-center',
        }, {
          text: 'Добавить',
          handler: () => {
            this.cartService.groupToCart(this.installItem.cartItems);
          }
        }
      ]
    });

    await alert.present();
  }

  scrolling(e: CustomEvent, cog: HTMLElement) {
    cog.style.transform = 'translate(0, -30%) rotate(' + e.detail.scrollTop / 5 + 'deg)';
  }

}
