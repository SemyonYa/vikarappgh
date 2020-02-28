import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../_models/i-menu-item';
import { MenuService } from '../_services/menu.service';
import { menuMobileAnimation, menuBtnMobileAnimation, menuAnimation } from '../_animations/menu.animation';
import { BehaviorSubject } from 'rxjs';
import { ICartItem } from '../_models/i-cart-item';
import { CartService } from '../_services/cart.service';
import { inFromLeftAnimation } from '../_animations/inFromLeft.animation';
import { inOutAnimation } from '../_animations/in-out.animation';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [menuAnimation, menuBtnMobileAnimation, menuMobileAnimation, inFromLeftAnimation, inOutAnimation]
})
export class MenuComponent implements OnInit {
  menu: Set<IMenuItem> = new Set<IMenuItem>();
  isFirst = true;
  isVisibleMobileMenu = false;
  cart: BehaviorSubject<ICartItem[]>;

  constructor(private menuService: MenuService, private cartService: CartService) { }

  ngOnInit() {
    this.cartService.initCart();
    this.cart = this.cartService.cart$;
    this.menu = this.menuService.menu;
    this.menuService.isFirstPage
      .subscribe(
        val => {
          this.isFirst = val;
        }
      );
    this.menuService.isVisibleMobile
      .subscribe(
        val => {
          this.isVisibleMobileMenu = val;
        }
      );
  }

  showMenu() {
    this.menuService.show();
  }

  hideMenu() {
    this.menuService.hide();
  }

  call() {
    window.location.href = 'tel:88008008008';
  }

  send() {
    window.location.href = 'mailto:info@vikar-auto.ru';
  }
}
