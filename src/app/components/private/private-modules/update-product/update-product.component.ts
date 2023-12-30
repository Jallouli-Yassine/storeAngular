import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id!:number;
  p!:Product;
  constructor(private r:Router,private produitService:ProductService,private ar:ActivatedRoute,) { }

  ngOnInit(): void {
   this.id= this.ar.snapshot.params['idProduct'];
   this.produitService.getProductById(this.id).subscribe(data=>{
    this.p=data
   });
   
  }

  updateProduit(formUser: NgForm) {
    if (formUser.valid) {
      this.produitService.updateProduit(this.id,this.p).subscribe(
        response => {
          //console.log(response);
          this.r.navigate(['/private-modules/store']);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
