import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { PhonesComponent } from './phones/phones.component';
import { AirpodsComponent } from './airpods/airpods.component';


@NgModule({
  declarations: [
    ProductComponent,
    PhonesComponent,
    AirpodsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
