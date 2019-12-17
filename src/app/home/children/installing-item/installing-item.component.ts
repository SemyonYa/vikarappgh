import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';
import { DataService } from 'src/app/_services/data.service';
import { InstallItem } from 'src/app/_models/install-item';
import { ActivatedRoute } from '@angular/router';
import { Good } from 'src/app/_models/good';
import { InstallItemGood } from 'src/app/_models/install-item-good';

@Component({
  selector: 'app-installing-item',
  templateUrl: './installing-item.component.html',
  styleUrls: ['./installing-item.component.scss'],
})
export class InstallingItemComponent implements OnInit {
  id: number;
  installItem: InstallItem;
  constructor(private menuService: MenuService, private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.menuService.isFirstPage.next(false);
    this.dataService.getInstallItem(this.id)
      .subscribe(
        (ii: InstallItem) => {
          this.installItem = ii;
          this.dataService.getInstallItemGoods(this.id)
            .subscribe(
              (gs: InstallItemGood[]) => {
                this.installItem.fillGoods(gs);
              }
            );
        }
      );
  }

  groupToCart() {
    confirm('Добавить?');
  }

}
