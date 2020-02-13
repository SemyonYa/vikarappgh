import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CartPage } from './cart.page';
import { CartRoutingModule } from './cart-routing.module';
import { InComponent } from './in/in.component';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: CartPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartRoutingModule
    // RouterModule.forChild(routes)
  ],
  declarations: [
    CartPage,
    InComponent,
    FormComponent,
    SuccessComponent
  ]
})
export class CartPageModule {}
