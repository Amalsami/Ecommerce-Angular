import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginComponent } from 'src/app/Component/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private baseURL = "https://localhost:7032/api/User/Login";

  constructor(private myClient: HttpClient) {

  }

  getUser(id:string){
    return this.myClient.get("https://localhost:7032/api/User/Login");
  }
}
