import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Category } from '../_models/category';
import { GoodGroup } from '../_models/good-group';
import { Good } from '../_models/good';
import { InstallItem } from '../_models/install-item';
import { InstallItemGood } from '../_models/install-item-good';
import { Shop } from '../_models/shop';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  categories$ = new BehaviorSubject<Category[]>([]);
  installItems$ = new BehaviorSubject<InstallItem[]>([]);

  getFull() {
    this.http.get(environment.host + '/data2/full-categories')
      .subscribe(
        (data: any[]) => {
          let categories: Category[] = [];
          data.forEach(c => {
            let category = new Category(c.id, c.name, c.description, c.n, c.img);
            (c.good_groups as any[])
              .forEach(gg => {
                let goodGroup = new GoodGroup(gg.id, gg.name, gg.description, gg.thickness_of, gg.img);
                (gg.goods as any[])
                  .forEach(g => {
                    const good = new Good(g.id, g.name, g.thickness, g.size, g.square, g.price, g.length, g.width);
                    goodGroup.goods.push(good);
                  });
                category.goodGroups.push(goodGroup);
              });
            categories.push(category);
          });
          this.categories$.next(categories);
        }
      );
  }

  getFullInstallItems() {
    this.http.get(environment.host + '/data2/full-install-items')
      .subscribe(
        (data: any[]) => {
          console.log("TCL: DataService -> getFullInstallItems -> data", data)
          let installItems: InstallItem[] = [];
          data.forEach(ii => {
            let installItem = new InstallItem(ii.id, ii.name, ii.works, ii.recommendations, ii.as_result, ii.img);
            (ii.install_item_goods as any[]).forEach(iig => {
              const installItemGood = new InstallItemGood(
                new Good(iig.good.id, iig.good.name, iig.good.thickness, iig.good.size, iig.good.square, iig.good.price, iig.good.length, iig.good.width),
                iig.quantity
              )
              installItem.installItemGoods.push(installItemGood)
            });
            installItems.push(installItem);
          });
          this.installItems$.next(installItems);
          console.log("TCL: DataService -> getFullInstallItems -> installItems", installItems)
        }
      );
  }

  // OLD
  installItems: BehaviorSubject<InstallItem[]> = new BehaviorSubject<InstallItem[]>([]);

  getCategories() {
    return this.http.get(environment.host + '/data2/categories')
      .pipe(
        map(
          (data: any[]) => data.map(c => new Category(c.id, c.name, c.description, c.n, c.img))
        )
      );
  }

  getGoodGroups(categoryId: number) {
    return this.http.get(environment.host + '/data2/good-groups?category_id=' + categoryId)
      .pipe(
        map(
          (data: any[]) => data.map(c => new GoodGroup(c.id, c.name, c.description, c.thickness_of, c.img))
        )
      );
  }

  getGoods(goodGroupId: number) {
    return this.http.get(environment.host + '/data2/goods?good_group_id=' + goodGroupId)
      .pipe(
        map(
          (data: any[]) => data.map(c => new Good(c.id, c.name, c.thickness, c.size, c.square, c.price, c.length, c.width))
        )
      );
  }

  getGood(id: number) {
    return this.http.get(environment.host + '/data2/good?id=' + id)
      .pipe(
        map(
          (c: any) => new Good(c.id, c.name, c.thickness, c.size, c.square, c.price, c.length, c.width)
        )
      );
  }

  getInstallItems() {
    this.http.get(environment.host + '/data2/install-items')
      .pipe(
        map(
          (data: any[]) => data.map(ii => new InstallItem(ii.id, ii.name, ii.works, ii.recommendations, ii.as_result, ii.img))
        )
      )
      .subscribe(
        (data: InstallItem[]) => {
          this.installItems.next(data);
        }
      );
  }

  getInstallItem(id: number) {
    return this.http.get(environment.host + '/data2/install-item?id=' + id)
      .pipe(
        map(
          (ii: any) => new InstallItem(ii.id, ii.name, ii.works, ii.recommendations, ii.as_result, ii.img)
        )
      );
  }

  getInstallItemGoods(installItemId: number) {
    return this.http.get(environment.host + '/data2/install-item-goods?install_item_id=' + installItemId)
      .pipe(
        map(
          // tslint:disable-next-line:max-line-length
          (data: any[]) => data.map(c => new InstallItemGood(new Good(c.good.id, c.good.name, c.good.thickness, c.good.size, c.good.square, c.good.price, c.good.length, c.good.width), c.q))
        )
      );
  }

  getShops() {
    return this.http.get(environment.host + '/data2/shops')
      .pipe(
        map(
          (data: any[]) => data.map(c => new Shop(c.id, c.title, c.address, c.phone, c.phone2))
        )
      );
  }
}
