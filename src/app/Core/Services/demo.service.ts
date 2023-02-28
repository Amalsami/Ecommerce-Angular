import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {


  private URL_DB = "https://localhost:7032/api/Products";
  constructor(private myClient:HttpClient) { }
  GetAllProduct(){
    return this.myClient.get(this.URL_DB);
  }

  GetUserByID(id:any){
    return this.myClient.get(this.URL_DB+"/"+id);
  }

}
