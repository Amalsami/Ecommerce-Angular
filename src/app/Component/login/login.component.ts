import { Component, OnInit } from '@angular/core';
import { FormControl, Validators ,FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Core/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginform: FormGroup | any;
  // email:any;
  // password:any;
logindto:any={ email: "", password: ""};
  errorMsg: string=""


  constructor( private router:Router,
    private formBuilder: FormBuilder,
    // private authService: AuthService,
    private loginService: LoginService){}
  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

    this.loginService.getUser(this.email.value).subscribe(
      (data) => {
        this.logindto = data;
        console.log(this.logindto)
      }
    );
  }

// loginform =new FormGroup({
//   email: new FormControl("", [Validators.required]),
//   password: new FormControl("", [Validators.required]),
// })

get email(){
  return this.loginform.controls["email" ].valid;
}
get password(){
  return this.loginform.controls["password" ].valid;
}

goToSignup(){
  this.router.navigate(["/signup"])
}

Submit(){
  this.logindto.password = this.password.value,
  this.logindto.email = this.email.value,
  console.log(this.logindto.value);
//   let user={


//     email:this.loginform.controls["email"],
//     password:this.loginform.controls["password"],


//   }

//   if( this.emailValid && this.passwordValid ){
//       console.log( this.loginform.value);
// }
// if (this.loginform.invalid) { // invalid form data
//   return this.loginform.markAllAsTouched();
// } else {
  // for (let i = 0; i < this.user.length; i++) {
  //   // check if user exists in db or not
  //   if (this.email.value == this.user[i].email && this.password.value == this.user[i].password) {
  //     sessionStorage.setItem('user', JSON.stringify(this.user[i].id));
  //     // this.authService.isLoggedIn = true;
      // return this.router.navigate(["/account"])
    // }
  } // end of loop on users in json db


// return this.errorMsg = "Wrong email or password"; // user not found

}

