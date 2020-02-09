import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/_services/menu.service';
import { DataService } from 'src/app/_services/data.service';
import { Category } from 'src/app/_models/category';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  categories: Category[];
  constructor(private menuService: MenuService, private dataService: DataService) { }

  ngOnInit() {
    this.menuService.isFirstPage.next(false);
    this.dataService.getCategories()
      .subscribe(
        (data: Category[]) => {
          this.categories = data;
        }
      );
  }

}
