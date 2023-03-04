import { Component, Input ,AfterContentInit, ContentChildren, ViewChild, QueryList, ElementRef } from '@angular/core';
import { DemoService } from 'src/app/Core/Services/demo.service';
import { CartService } from 'src/app/Core/Services/cart.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  products: any;

  constructor(private myService:DemoService,private cartservice:CartService){}
  ngOnInit():void{
    this.myService.GetProductWithOffers()
    .subscribe(res=>{
      this.products=res;
      this.products.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  }
  addToCart(item:any){
    this.cartservice.addToCart(item);
    }
  
}
