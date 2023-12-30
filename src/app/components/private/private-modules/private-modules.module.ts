import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateModulesRoutingModule } from './private-modules-routing.module';
import { StoreComponent } from './store/store.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductImgComponent } from './product-img/product-img.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  declarations: [
    StoreComponent,
    ProductDetailsComponent,
    ProductImgComponent,
    AddProductComponent,
    UpdateProductComponent
  ],
  imports: [
    CommonModule,
    PrivateModulesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrivateModulesModule { }
