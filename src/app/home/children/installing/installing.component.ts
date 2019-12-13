import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';

@Component({
  selector: 'app-installing',
  templateUrl: './installing.component.html',
  styleUrls: ['./installing.component.scss'],
})
export class InstallingComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.isFirstPage.next(false);
  }

}
