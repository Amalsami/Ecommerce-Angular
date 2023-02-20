import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AboutAsComponent } from './Component/about-us/about-as.component';
import { AccountComponent } from './Component/account/account.component';
import { ProductComponent } from './Component/product/product.component';
import { CartComponent } from './Component/cart/cart.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {path:'aboutus',component:AboutAsComponent},
  {path:'account',component:AccountComponent},
  {path:'product',component:ProductComponent},
  {path:'Cart',component:CartComponent},];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
