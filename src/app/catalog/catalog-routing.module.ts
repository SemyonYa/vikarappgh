import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { CatalogPage } from './catalog.page';

const cartRoutes: Routes = [
  {
    path: 'catalog', component: CatalogPage,
    children: [
      { path: ':categoryId', component: CategoryComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(cartRoutes)
  ],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
