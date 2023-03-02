import { Component } from '@angular/core';
import { DemoService } from 'src/app/Core/Services/demo.service';
import { CartService } from 'src/app/Core/Services/cart.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent {
  products: any;


  constructor(private myService:DemoService,private cartservice:CartService){}
  ngOnInit():void{
    this.myService.GetAllProduct()
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
