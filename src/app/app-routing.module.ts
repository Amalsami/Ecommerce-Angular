import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AboutAsComponent } from './Component/about-us/about-as.component';
import { AccountComponent } from './Component/account/account.component';
import { ProductComponent } from './Component/product/product.component';
import { CartComponent } from './Component/cart/cart.component';
import { SingleProductComponent } from './Component/single-product/single-product.component';
import { FilteredComponent } from './Component/filtered/filtered.component';
import { SignupComponent } from './Component/signup/signup.component';
import { LoginComponent } from './Component/login/login.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutAsComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent},
  {path:'Cart',component:CartComponent},
  {path:'filter',component:FilteredComponent},
  {path:'SingleProductComponent',component:SingleProductComponent},
  {path:'singleProduct/:id',component:SingleProductComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
