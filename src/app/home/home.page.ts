import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '../_models/i-menu-item';
import { MenuService } from '../_services/menu.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isVisibleMobileMenu: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isFirst: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  menu: Set<IMenuItem> = new Set<IMenuItem>();
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.menu;
    this.isVisibleMobileMenu = this.menuService.isVisibleMobile;
    this.isFirst = this.menuService.isFirstPage;
  }

  showMenu() {
    this.menuService.show();
  }

  hideMenu() {
    this.menuService.hide();
  }

}
