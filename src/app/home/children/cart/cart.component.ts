import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  constructor(private menuService: MenuService, private cartService: CartService) { }

  ngOnInit() {
    this.menuService.isFirstPage.next(false);
  }

  plus(id) {
    // this.cartService.plus(Number.parseInt(id, 10));
  }

}
