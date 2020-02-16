import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';
import { IonContent } from '@ionic/angular';

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

  mo(e: MouseEvent) {
    let el = e.target as HTMLElement;
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;
    const backY = 50 - (screenHeight - 2 * e.y) * 5 / screenHeight;
    const backX = 50 - (screenWidth - 2 * e.y) * 5 / screenWidth;
    el.style.backgroundPosition = backX.toString() + '% ' + backY.toString() + '%';
  }
}
