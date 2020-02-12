import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_services/data.service';
import { Category } from 'src/app/_models/category';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  categories: Category[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.categories$
      .subscribe(
        (data: Category[]) => {
          this.categories = data;
        }
      );
  }

}
