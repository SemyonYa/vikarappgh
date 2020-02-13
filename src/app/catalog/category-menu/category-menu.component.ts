import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';
import { Category } from 'src/app/_models/category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss'],
})
export class CategoryMenuComponent implements OnInit {
  categories: Category[] = [];
  categoryN: number;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.categoryN = this.activatedRoute.snapshot.params.categoryId;
    console.log(this.activatedRoute);
    this.dataService.categories$
      .subscribe(
        (data: Category[]) => {
          this.categories = data;
        }
      );
  }

}
