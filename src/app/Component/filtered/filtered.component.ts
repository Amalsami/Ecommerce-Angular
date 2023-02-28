import { Component } from '@angular/core';
import { CartService } from 'src/app/Core/Services/cart.service';
import { DemoService } from 'src/app/Core/Services/demo.service';
@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.css']
})
export class FilteredComponent {
  // ngOnChanges(): void {

  // }
  // item:any=""
  // menuitems:any[]=[]
  // @Input() searhed:string=''
  public products:any;
  // images:any=["https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  // "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  // "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  // "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  // "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"]

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
  //   myService.getALLProduct().subscribe(
  //       {
  //         next:(data)=>{

  //           this.products = data;
  //           console.log(this.products)
  //         },
  //         // error:(err)=>{console.log(err)}
  //       }
  //     )
  // }
}
