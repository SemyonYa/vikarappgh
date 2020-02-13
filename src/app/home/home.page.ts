import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../_models/i-menu-item';
import { MenuService } from '../_services/menu.service';
import { menuAnimation, menuBtnMobileAnimation, menuMobileAnimation } from '../_animations/menu.animation';
import { CartService } from '../_services/cart.service';
import { BehaviorSubject } from 'rxjs';
import { ICartItem } from '../_models/i-cart-item';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  constructor(private menuService: MenuService, private cartService: CartService) { }

  ngOnInit() { }

}
