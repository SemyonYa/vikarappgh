import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../models/i-menu-item';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  menu: Set<IMenuItem> = new Set<IMenuItem>();
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.menu;
    // this.menu
    //   .add({ href: '/', title: 'Главная' })
    //   .add({ href: '/home/catalog', title: 'Каталог' })
    //   .add({ href: '/home/installing', title: 'Установка' })
    //   .add({ href: '/home/contact', title: 'Контакты' });
  }

}
