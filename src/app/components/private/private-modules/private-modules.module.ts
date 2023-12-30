import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateModulesRoutingModule } from './private-modules-routing.module';
import { StoreComponent } from './store/store.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductImgComponent } from './product-img/product-img.component';


@NgModule({
  declarations: [
    StoreComponent,
    ProductDetailsComponent,
    ProductImgComponent
  ],
  imports: [
    CommonModule,
    PrivateModulesRoutingModule
  ]
})
export class PrivateModulesModule { }
