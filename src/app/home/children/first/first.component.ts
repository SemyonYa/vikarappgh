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
    console.log('first', this.menuService.isFirstPage.value);
    this.menuService.isFirstPage.next(true);
  }

}
