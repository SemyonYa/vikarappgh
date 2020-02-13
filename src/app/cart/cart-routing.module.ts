import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CartPage } from './cart.page';
import { InComponent } from './in/in.component';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';

const cartRoutes: Routes = [
  {
    path: 'cart', component: CartPage,
    children: [
      { path: '', component: InComponent },
      { path: 'form', component: FormComponent },
      { path: 'success', component: SuccessComponent }
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
export class CartRoutingModule { }
