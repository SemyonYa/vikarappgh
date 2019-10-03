import { Injectable } from '@angular/core';
import { IMenuItem } from '../models/i-menu-item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: Set<IMenuItem> = new Set<IMenuItem>();
  currentMenuItemHref = '';
  isVisibleMobile = false;

  constructor() {
    this.menu
      .add({ href: '/', title: 'Главная' })
      .add({ href: '/home/catalog', title: 'Каталог' })
      .add({ href: '/home/installing', title: 'Установка' })
      .add({ href: '/home/contact', title: 'Контакты' });
  }
}
