import { Component, Input } from '@angular/core';
import { DemoService } from 'src/app/Core/Services/demo.service';
import{CartService}from'src/app/Core/Services/cart.service'

import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.css']
})
export class FilteredComponent {
  searchKey:string="";
 // categeoies:any[]=[];
 public productList:any;
 public product:any;

 public filterCategory:any;
 @Input() items:any= [];
 @Input() term:string ='';



  constructor(private api:DemoService ,private CartService:CartService){
  }
  ngOnInit():void{
this.api.GetAllProduct().subscribe(res=>{
this.productList=res;
this.filterCategory=res;
this.productList.forEach((a:any)=>{
  if(a.category==="women's clothing"||a.category==="men's clothing"){
    a.category="fashion"
  }
  Object.assign(a,{quantity:1,total:a.price});
});
    });
    this.CartService.search.subscribe((val:any)=>{
      this.searchKey=val;
    })

  }
 addToCart(item:any){
   this.CartService.addToCart(item);
   }

  filter(category:string){
    this.filterCategory=this.productList.filter((a:any)=>{
      if(a.category == category||category==''){
        return a;
      }
    })
  }

  //products:any[]=[];
 // categegies:any;


  // ngOnChanges(): void {
 products:any;
  // }
  // item:any=""
  // menuitems:any[]=[]
  // @Input() searhed:string=''

  // images:any=["https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  // "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  // "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  // "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  // "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"]

  // constructor(myService:DemoService){
  // //   // console.log(myService.GetAllUsers())
  // //   // myService.GetAllUsers().subscribe(
  // //   //   (data)=>{console.log(data)},
  // //   //   (err)=>{console.log(err)}
  // //   //   )


  //   // console.log(this.images);

  //   myService.GetAllProduct().subscribe(
  //       {
  //         next:(data)=>{

  //           this.products = data;
  //           console.log(this.products)
  //         },
  //         error:(err)=>{console.log(err)}
  //       }
  //     )
  // }


}