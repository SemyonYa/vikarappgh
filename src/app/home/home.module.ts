import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { FirstComponent } from './children/first/first.component';
import { ContactComponent } from './children/contact/contact.component';
import { InstallingComponent } from './children/installing/installing.component';
import { HomeRoutingModule } from './home-routing.module';
import { InstallingItemComponent } from './children/installing-item/installing-item.component';
import { DescriptionComponent } from './children/description/description.component';

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
    ContactComponent,
    DescriptionComponent,
    InstallingComponent,
    InstallingItemComponent
  ]
})
export class HomePageModule {}
