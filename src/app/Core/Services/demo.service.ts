import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map}from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DemoService {


  private URL_DB = "https://fakestoreapi.com/products";
  private URL_DB2 ="https://fakestoreapi.com/products/categories";
  private URL_DB3 ="https://fakestoreapi.com/products/category"

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
  GetAllCategeries(){
    return this.myClient.get(this.URL_DB2);
  }
  GetproductbyCategeries(anywored:string){
    return this.myClient.get(this.URL_DB3+"/"+anywored);
  }

}
