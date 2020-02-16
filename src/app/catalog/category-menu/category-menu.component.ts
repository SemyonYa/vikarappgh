import { Component, OnInit, Input } from '@angular/core';
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
  icons: string[] = [
    "vibro.svg",
    "noise.svg",
    "noise.svg",
  ];
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.categories$
      .subscribe(
        (data: Category[]) => {
          this.categories = data;
        }
      );
  }

}
