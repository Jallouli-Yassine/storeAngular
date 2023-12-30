import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StoreComponent} from "./store/store.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductImgComponent} from "./product-img/product-img.component";

const routes: Routes = [
  {
    path: 'store',
    component:StoreComponent,
  },
  {
    path: 'productDetails/:idProduct',
    component:ProductDetailsComponent,
    children:[
      {
      path: 'img',
      component:ProductImgComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateModulesRoutingModule { }
