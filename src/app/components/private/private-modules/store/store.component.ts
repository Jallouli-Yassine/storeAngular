import {Component, OnInit} from '@angular/core';
import {Product} from "../../../../models/product";
import {ProductService} from "../../../../services/product.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{

  products:Product[]=[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProductsApi().subscribe(products => {
      this.products = products;
  });
  }





}
