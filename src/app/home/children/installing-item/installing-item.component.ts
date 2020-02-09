import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';
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
  cartItems: ICartItem[] = [];
  constructor(private menuService: MenuService, private dataService: DataService, private activatedRoute: ActivatedRoute, private alertController: AlertController, private cartService: CartService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.menuService.isFirstPage.next(false);
    this.dataService.getInstallItem(this.id)
      .subscribe(
        (ii: InstallItem) => {
          this.installItem = ii;
          this.dataService.getInstallItemGoods(this.id)
            .subscribe(
              (gs: InstallItemGood[]) => {
                this.installItem.fillGoods(gs);
              }
            );
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

}
