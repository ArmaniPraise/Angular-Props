import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ProductComponent } from './product/product.component';
import { ProductModule } from './product/product.module';

const routes: Routes = [
 { path:'first',
  component:FirstComponent
},{
  path:'second',
  component:SecondComponent
},{
  path:'product',
  loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
