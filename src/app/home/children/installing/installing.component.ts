import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';
import { InstallItem } from 'src/app/_models/install-item';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-installing',
  templateUrl: './installing.component.html',
  styleUrls: ['./installing.component.scss'],
})
export class InstallingComponent implements OnInit {
  installItems: InstallItem[] = [];
  constructor(private menuService: MenuService, private dataService: DataService) { }

  ngOnInit() {
    this.menuService.isFirstPage.next(false);
    this.dataService.getInstallItems()
      .subscribe(
        (data: InstallItem[]) => {
          this.installItems = data;
        }
      );
  }

}
