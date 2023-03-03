import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import {map}from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DemoService {


  private URL_DB = "https://localhost:7032/api/Products/GetAllProducts";
  private URL_DB2 ="https://localhost:7032/Product/Category";
  private URL_DB3 ="https://fakestoreapi.com/products/category";
  private URL_DB4 = "https://localhost:7032/api/Products";

  constructor(private myClient:HttpClient) { }
  GetAllProduct():Observable<any>{

    return this.myClient.get("https://localhost:7032/api/Products/GetAllProducts")
    // .pipe(map((res:any)=>{
    //   return res;
    // }
    // ))
  }

  GetProductByID(id:any){
    return this.myClient.get(this.URL_DB4+"/"+id);
  }
  GetAllCategeries(){
    return this.myClient.get(this.URL_DB2);
  }
  GetproductbyCategeries(anywored:string):Observable<any>{
    return this.myClient.get(this.URL_DB3+"/"+anywored);
  }

}
