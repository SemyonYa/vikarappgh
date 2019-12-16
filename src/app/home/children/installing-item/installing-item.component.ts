import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-installing-item',
  templateUrl: './installing-item.component.html',
  styleUrls: ['./installing-item.component.scss'],
})
export class InstallingItemComponent implements OnInit {

  constructor(private menuService: MenuService, private dataService: DataService) { }

  ngOnInit() {
    this.menuService.isFirstPage.next(false);
  }

}
