import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map}from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DemoService {


  private URL_DB = "https://fakestoreapi.com/products";
  constructor(private myClient:HttpClient) { }
  GetAllProduct(){
    return this.myClient.get<any>("https://fakestoreapi.com/products")
    .pipe(map((res:any)=>{
      return res;
    }
    ))
  }

  GetProductByID(id:any){
    return this.myClient.get(this.URL_DB+"/"+id);
  }

}
