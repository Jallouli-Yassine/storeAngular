import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../models/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "http://localhost:3000/products";
  apiUrlCarts = "http://localhost:3000/Cart";
  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAllProductsApi() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(this.apiUrl + '/' + id);
  }

  addNewProduct(p: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, p, this.httpOptions);
  }


  deleteProdcut(prodcut: Product): Observable<Product> {
    return this.http.delete<Product>(this.apiUrl + '/' + prodcut.id);
  }

  updateProduit(id: number,prodcut: Product): Observable<Product> {
    return this.http.put<Product>(this.apiUrl + '/' + id, prodcut, this.httpOptions);
  }

  addPtoCart(p: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, p, this.httpOptions);
  }



}
