import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userName = "";
  firstName = "";
  lastName = "";
  email: any;
  password: any;
  // image:any;
  // gender="";








  registerform = new FormGroup({

    userName: new FormControl("", [Validators.required]),
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    // image: new FormControl("", [Validators.required]),

    // gender: new FormControl("", [Validators.required]),



  })
  get userNameValid() {
    return this.registerform.controls["userName"].valid;
  }
  get firstNameValid() {
    return this.registerform.controls["firstName"].valid;
  }
  get lastNameValid() {
    return this.registerform.controls["lastName"].valid;
  }
  get emailValid() {
    return this.registerform.controls["email"].valid;
  }
  get passwordValid() {
    return this.registerform.controls["password"].valid;
  }
  // get imageValid(){
  //   return this.registerform.controls["image" ].valid;
  // }

  // get genderValid(){
  //   return this.registerform.controls["gender" ].valid;
  // }



  Submit() {

    let user = {
      userName: this.registerform.controls["userName"],
      firstName: this.registerform.controls["firstName"],
      lastName: this.registerform.controls["lastName"],
      email: this.registerform.controls["email"],
      password: this.registerform.controls["password"],
      // image:this.registerform.controls["image"],

      // gender:this.registerform.controls["gender"],

    }
    // if( this.userIdValid && this.firstNameValid && this.lastNameValid && this.emailValid && this.passwordValid && this.addressValid && this.genderValid){
    //     console.log( this.registerform.value);

    console.log(this.registerform.value);

  }

}



