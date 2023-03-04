import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  db=('https://localhost:7032/api/User/Register')
  constructor(private myClient: HttpClient) {
  }
  addNewUser(newUser: any) {
    return this.myClient.post(this.db, newUser);
  }



  getUser(id:string){
    return this.myClient.get("https://localhost:7032/api/User/Register" );
  }
}
