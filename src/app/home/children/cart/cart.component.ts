import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.isFirstPage.next(false);
  }

}
