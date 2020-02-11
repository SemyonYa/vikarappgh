import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
  }

  showMenu() {
    this.menuService.show();
  }

  hideMenu() {
    this.menuService.hide();
  }
}
