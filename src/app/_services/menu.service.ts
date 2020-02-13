import { Injectable } from '@angular/core';
import { IMenuItem } from '../_models/i-menu-item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menu: Set<IMenuItem> = new Set<IMenuItem>();
  currentMenuItemHref = '';
  isFirstPage: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  isVisibleMobile: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {

    this.menu
      .add({ href: '/home/first', title: 'Главная' })
      .add({ href: '/catalog/1', title: 'Каталог' })
      .add({ href: '/home/description', title: 'Материалы' })
      .add({ href: '/home/installing', title: 'Установка' })
      .add({ href: '/home/contact', title: 'Контакты' });
  }
  show() {
    this.isVisibleMobile.next(true);
    console.log('show');
  }

  hide() {
    this.isVisibleMobile.next(false);
  }
}
