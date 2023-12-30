import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../../../models/product";
import {ProductService} from "../../../../services/product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  id!: number;
  product!: Product;
  constructor(private prodService:ProductService,private ar:ActivatedRoute) {}
  ngOnInit(): void {
    this.id=  this.ar.snapshot.params['idProduct'];
    this.prodService.getProductById(this.id).subscribe(value => this.product=value);
  }

}
