import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';
import { Category } from 'src/app/_models/category';
import { DataService } from 'src/app/_services/data.service';
import { GoodGroup } from 'src/app/_models/good-group';
import { Good } from 'src/app/_models/good';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  categories: Category[] = [];
  filter: number;
  constructor(private menuService: MenuService, private dataService: DataService) { }

  ngOnInit() {
    this.menuService.isFirstPage.next(false);
    this.filter = 0;
    this.dataService.getCategories()
      .subscribe(
        (data: Category[]) => {
          for (let c of data) {
            this.dataService.getGoodGroups(c.id)
              .subscribe(
                (data2: GoodGroup[]) => {
                  for (let gg of data2) {
                    this.dataService.getGoods(gg.id)
                      .subscribe(
                        (data3: Good[]) => {
                          gg.fillGoods(data3);
                        }
                      );
                  }
                  c.fillGoodGroups(data2);
                }
              );
          };
          this.categories = data;
        }
      );
  }

  filtering(n) {
    this.filter = n;
  }

}
