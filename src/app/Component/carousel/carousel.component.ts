import { Component, Input ,AfterContentInit, ContentChildren, ViewChild, QueryList, ElementRef } from '@angular/core';
import { DemoService } from 'src/app/core/Services/demo.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  products:any;
  images:any=["https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"]

  
  constructor(myService:DemoService){
    // console.log(myService.GetAllUsers())
    // myService.GetAllUsers().subscribe(
    //   (data)=>{console.log(data)},
    //   (err)=>{console.log(err)}
    //   )
  
   
    console.log(this.images);
    
    myService.GetAllProduct().subscribe(
        {
          next:(data)=>{
            
            this.products = data;
            console.log(this.products)
          },
          error:(err)=>{console.log(err)}
        }
      )
  }
}
