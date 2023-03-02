import { Component } from '@angular/core';
import { FormControl, Validators ,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email:any;
  password:any;





loginform =new FormGroup({

  
  
  email: new FormControl("", [Validators.required]),
  password: new FormControl("", [Validators.required]),


})

get emailValid(){
  return this.loginform.controls["email" ].valid;
}
get passwordValid(){
  return this.loginform.controls["password" ].valid;
}



Submit(){

  let user={
   
    
    email:this.loginform.controls["email"],
    password:this.loginform.controls["password"],
   
  
  }

  if( this.emailValid && this.passwordValid ){
      console.log( this.loginform.value);
}

}
}
