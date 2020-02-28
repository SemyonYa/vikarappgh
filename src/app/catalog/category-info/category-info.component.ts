import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/_models/category';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-category-info',
  templateUrl: './category-info.component.html',
  styleUrls: ['./category-info.component.scss'],
})
export class CategoryInfoComponent implements OnInit {
  @Input() category: Category;
  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  showPhotos() {
    alert('photos');
  }

  close() {
    this.modalController.dismiss();
  }
}
