import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Shared/footer/footer.component';
import { HomeComponent } from './Component/home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import { AboutAsComponent } from './Component/about-us/about-as.component';
import { AccountComponent } from './Component/account/account.component';
import { CartComponent } from './Component/cart/cart.component';
import { SliderComponent } from './Component/slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    NavBarComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    NgbModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
