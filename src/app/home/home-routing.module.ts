import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CatalogComponent } from './children/catalog/catalog.component';
import { ContactComponent } from './children/contact/contact.component';
import { FirstComponent } from './children/first/first.component';
import { InstallingComponent } from './children/installing/installing.component';
import { CartComponent } from './children/cart/cart.component';
import { InstallingItemComponent } from './children/installing-item/installing-item.component';

const homeRoutes: Routes = [
  {
    path: 'home', component: HomePage,
    children: [
      { path: 'catalog', component: CatalogComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'first', component: FirstComponent },
      { path: 'installing', component: InstallingComponent, pathMatch: 'full' },
      // children: [
      { path: 'installing/:id', component: InstallingItemComponent, pathMatch: 'full' },
      // ]

      { path: 'cart', component: CartComponent },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
