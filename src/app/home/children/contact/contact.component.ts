import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    console.log('contact', this.menuService.isFirstPage.value);
    this.menuService.isFirstPage.next(false);
  }

}
