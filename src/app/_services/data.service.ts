import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Category } from '../_models/category';
import { GoodGroup } from '../_models/good-group';
import { Good } from '../_models/good';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

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
}
