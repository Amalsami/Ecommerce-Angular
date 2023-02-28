import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private URL_DB ="https://localhost:7032/api/Products";
  constructor(private HttpClient: HttpClient){ }
  getALLProduct()
  {
    this.HttpClient.get(this.URL_DB);
  }
  getProductByID(prodID: number) {

  }
  getProductByCatID(catID: number) {

  }
  addProduct(newProd: any) {

  }
  deleteProduct(prodID: number) {

  }
  updateProduct(prodID: number, updatedProd: any) {

  }
}
