import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ProductService} from "../../../../services/product.service";
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  addProductForm:FormGroup;

constructor(private fb: FormBuilder,private prodService:ProductService,private r:Router) {
  let formControls = {
    nom: new FormControl('', [
      Validators.required,
      Validators.pattern("[a-zA-Z]*"),
      Validators.minLength(3)
    ]),
    description: new FormControl('', Validators.required),
    prix: new FormControl(null, Validators.required),
    /*
    blocs: new FormArray([new FormControl('')]),
    u: new FormControl('')
*/
  }


  this.addProductForm = this.fb.group(formControls);
 // console.log(this.addFoyerForm);
}

  get nomProduct() { return this.addProductForm.get('nom'); }
  get descriptionProduct() { return this.addProductForm.get('description'); }
  get prixProduct() { return this.addProductForm.get('prix'); }


  save() {
    if (this.addProductForm.valid) {
      this.prodService.addNewProduct(this.addProductForm.value).subscribe(
        response => {
          console.log(response);
          this.r.navigate(['/private-modules/store']);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
