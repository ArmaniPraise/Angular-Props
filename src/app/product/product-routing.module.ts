import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { PhonesComponent } from './phones/phones.component';
import { AirpodsComponent } from './airpods/airpods.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {path: 'phones',
      component: PhonesComponent
    },
    {
      path: 'airpods',
      component: AirpodsComponent
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
