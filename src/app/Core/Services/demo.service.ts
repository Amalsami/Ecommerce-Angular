import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private URL_DB = "https://fakestoreapi.com/products";
  constructor(private myClient:HttpClient) { }
  GetAllProduct(){
    return this.myClient.get(this.URL_DB);
  }

}
