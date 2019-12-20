import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../_models/i-menu-item';
import { MenuService } from '../_services/menu.service';
import { menuAnimation, menuBtnMobileAnimation, menuMobileAnimation } from '../_animations/menu.animation';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [menuAnimation, menuBtnMobileAnimation, menuMobileAnimation]
})
export class HomePage implements OnInit {
  isVisibleMobileMenu = false;
  isFirst = '';
  menu: Set<IMenuItem> = new Set<IMenuItem>();
  constructor(private menuService: MenuService, private cartService: CartService) { }

  ngOnInit() {
    this.cartService.initCart();
    this.menu = this.menuService.menu;
    this.menuService.isVisibleMobile
      .subscribe(
        val => {
          this.isVisibleMobileMenu = val;
        }
      );
    this.menuService.isFirstPage
      .subscribe(
        val => {
          this.isFirst = val ? 'first' : 'notFirst';
        }
      );
  }

  showMenu() {
    this.menuService.show();
    console.log('show');
  }

  hideMenu() {
    this.menuService.hide();
  }

}
