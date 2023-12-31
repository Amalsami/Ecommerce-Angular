import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './Component/home/home.component';
import { CarouselComponent } from './Component/carousel/carousel.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { AboutAsComponent } from './Component/about-us/about-as.component';
import { AccountComponent } from './Component/account/account.component';
import { CartComponent } from './Component/cart/cart.component';
import { SliderComponent } from './Component/slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FilteredComponent } from './Component/filtered/filtered.component';
import { ProductComponent } from './Component/product/product.component';
import { FormsModule } from '@angular/forms';
import { SingleProductComponent } from './Component/single-product/single-product.component';
import {MatIconModule} from '@angular/material/icon';
import { BestSellerComponent } from './Component/best-seller/best-seller.component';
import { FilterToPoductComponent } from './Component/filter-to-poduct/filter-to-poduct.component';
import { ExploreAreaComponent } from './Component/explore-area/explore-area.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './Component/signup/signup.component';
import { LoginComponent } from './Component/login/login.component';
import { SearchPipe } from './Core/search.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    NavBarComponent,
    SliderComponent,
    AboutAsComponent,
    AccountComponent,
    CartComponent,
    FilteredComponent,
    AboutAsComponent,
    AccountComponent,
    CartComponent,
    ProductComponent,
    SingleProductComponent,
    BestSellerComponent,
    FilterToPoductComponent,
    ExploreAreaComponent,
    SignupComponent,
    LoginComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    NgbModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
