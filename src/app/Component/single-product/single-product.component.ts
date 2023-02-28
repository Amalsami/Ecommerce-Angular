import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { DemoService } from 'src/app/Core/Services/demo.service';
import{CartService}from'src/app/Core/Services/cart.service'
//import { DemoService } from 'src/app/Core/Services/demo.service.ts';



@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {
  products:any;
   ID=0;
   constructor(private cartservice:CartService,myService:DemoService,myActiviivated:ActivatedRoute){
    this.ID=myActiviivated.snapshot.params["id"];
    myService.GetProductByID(this.ID).subscribe(
      {
        next:(data)=>{
          this.products=data;       
        },
        error:(err)=>{console.log(err)}
      }
    )
   }
// addToCart(item:any){
// this.cartservice.addToCart(item);
// }
}
