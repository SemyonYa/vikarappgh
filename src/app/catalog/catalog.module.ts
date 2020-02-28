import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CatalogPage } from './catalog.page';
import { CategoryComponent } from './category/category.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CategoryInfoComponent } from './category-info/category-info.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: CatalogPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatalogRoutingModule
    // RouterModule.forChild(routes)
  ],
  declarations: [
    CatalogPage,
    CategoryComponent,
    CategoryMenuComponent,
    CategoryInfoComponent
  ],
  entryComponents: [
    CategoryInfoComponent
  ]
})
export class CatalogPageModule { }
