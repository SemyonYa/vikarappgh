import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ContactComponent } from './children/contact/contact.component';
import { FirstComponent } from './children/first/first.component';
import { InstallingComponent } from './children/installing/installing.component';
import { InstallingItemComponent } from './children/installing-item/installing-item.component';
import { DescriptionComponent } from './children/description/description.component';

const homeRoutes: Routes = [
  {
    path: 'home', component: HomePage,
    children: [
      { path: 'contact', component: ContactComponent },
      { path: 'first', component: FirstComponent },
      { path: 'description', component: DescriptionComponent },
      { path: 'installing', component: InstallingComponent, pathMatch: 'full' },
      { path: 'installing/:id', component: InstallingItemComponent, pathMatch: 'full' }
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
