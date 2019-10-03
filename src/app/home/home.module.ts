import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { FirstComponent } from './children/first/first.component';
import { CatalogComponent } from './children/catalog/catalog.component';
import { ContactComponent } from './children/contact/contact.component';
import { InstallingComponent } from './children/installing/installing.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule
  ],
  declarations: [
    HomePage,
    FirstComponent,
    CatalogComponent,
    ContactComponent,
    InstallingComponent
  ]
})
export class HomePageModule {}
