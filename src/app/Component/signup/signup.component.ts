import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/Core/Services/register.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerform: FormGroup | any;
  // userName = "";
  // firstName = "";
  // lastName = "";
  // email: any;
  // password: any;

  newUser = { firstname: "", lastname: "", email: "", password: "" };
  oldUsers: any;
  duplicatedEmail = "";
  passwordError = "";
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router,) {
  }

  ngOnInit(): void {
    this.registerform = this.formBuilder.group({
      userName: new FormControl("", [Validators.required]),
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),

      // get all registered users
      // this.registerService.getUser(this.email.value).subscribe(
      //   (data: any) => {
      //     this.oldUsers = data;
      //   }
      // );
    })
  }


  get userName() {
    return this.registerform.controls["userName"].valid;
  }
  get firstName() {
    return this.registerform.controls["firstName"].valid;
  }
  get lastName() {
    return this.registerform.controls["lastName"].valid;
  }
  get email() {
    return this.registerform.controls["email"].valid;
  }
  get password() {
    return this.registerform.controls["password"].valid;
  }

  Submit() {

    // let user = {
    //   userName: this.registerform.controls["userName"],
    //   firstName: this.registerform.controls["firstName"],
    //   lastName: this.registerform.controls["lastName"],
    //   email: this.registerform.controls["email"],
    //   password: this.registerform.controls["password"],

    this.newUser.firstname = this.firstName.value
      this.newUser.lastname = this.lastName.value,
      this.newUser.password = this.password.value,
      this.newUser.email = this.email.value,
      console.log(this.registerform.value);
      this.registerService.addNewUser(this.newUser).subscribe();
    setTimeout(() => {
      this.router.navigate(['/account']);
    }, 1500); //redirct to login page
    this.registerform.reset();

    // image:this.registerform.controls["image"],
    console.log(this.registerform.value);
    // gender:this.registerform.controls["gender"],

  }
  // if( this.userIdValid && this.firstNameValid && this.lastNameValid && this.emailValid && this.passwordValid && this.addressValid && this.genderValid){
  //     console.log( this.registerform.value);



}




