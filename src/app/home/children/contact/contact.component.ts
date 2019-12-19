import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';
import { DataService } from 'src/app/_services/data.service';
import { Shop } from 'src/app/_models/shop';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  shops = new Observable<Shop[]>();
  constructor(private menuService: MenuService, private dataService: DataService) { }

  ngOnInit() {
    this.shops = this.dataService.getShops();
    console.log('contact', this.menuService.isFirstPage.value);
    this.menuService.isFirstPage.next(false);
  }

  call(ph) {
    window.location.href = 'tel:' + ph;
  }

  sendTo(m) {
    window.location.href = 'mailto:' + m;
  }

}
