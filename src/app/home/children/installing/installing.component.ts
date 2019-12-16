import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';
import { InstallItem } from 'src/app/_models/install-item';
import { DataService } from 'src/app/_services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-installing',
  templateUrl: './installing.component.html',
  styleUrls: ['./installing.component.scss'],
})
export class InstallingComponent implements OnInit {
  slideOpts = {
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };
  installItems = new Observable<InstallItem[]>();
  constructor(private menuService: MenuService, private dataService: DataService) { }

  ngOnInit() {
    this.menuService.isFirstPage.next(false);
    this.installItems = this.dataService.getInstallItems();
  }

}
