import { Component, OnInit } from '@angular/core';
import { MenuService } from '../_services/menu.service';
import { IMenuItem } from '../_models/i-menu-item';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  menu: Set<IMenuItem> = new Set<IMenuItem>();
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menu = this.menuService.menu;
  }

}
