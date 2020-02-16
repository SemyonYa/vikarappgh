import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../_models/category';
import { DataService } from '../_services/data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.page.html',
  styleUrls: ['./catalog.page.scss'],
})
export class CatalogPage implements OnInit {
  categoryN: number;
  categories: Category[] = [];
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.categories$
      .subscribe(
        (data: Category[]) => {
          this.categories = data;
        }
      );
    this.categoryN = this.activatedRoute.snapshot.children[0].params.categoryId;
  }
}
