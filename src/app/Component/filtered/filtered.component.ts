import { Component } from '@angular/core';
import { DemoService } from 'src/app/Core/Services/demo.service';
import{CartService}from'src/app/Core/Services/cart.service'

import {ActivatedRoute} from '@angular/router'
import { __values } from 'tslib';
@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.css']
})
export class FilteredComponent {
  searchKey:string="";
 // categeoies:any[]=[];
 public productList:any;
 public  categeoies:any[]=[];
 
 public filterCategory:any;
 



  constructor(private api:DemoService ,private CartService:CartService){
  }
  ngOnInit():void{
    this.GetAllCategeries()
    
this.api.GetAllProduct().subscribe(res=>{
this.productList=res;
this. filterCategory=res;
this.productList.forEach((a:any)=>{

  Object.assign(a,{quantity:1,total:a.price});
});
    });
    this.CartService.search.subscribe((val:any)=>{
      this.searchKey=val;
    })
  }
  addToCart(item:any){
    let data =localStorage.getItem('session')
    this.CartService.addToCart(item);
    console.log('local'+data); 
  }
  //try to save data in local storage to not repeate the cart again
//  addToCart(item:any){
//   let data =localStorage.getItem('session')
//     if(data!=null){
//       for (const i of data) {
//         if(item==i){
//           console.log(data);       
//         }
//         else{
//           this.CartService.addToCart(item);
//         }
//       }
//     }
//    }
  //  GetAllProduct(){
  //   this.api.GetAllProduct().subscribe((res:any)=>{
  //     console.log(res);
  // this.productList=res
  //   } ,error=>{
  //     alert(error)
  //   }
      
  //   )
  //  }
   
  GetAllCategeries(){
    this.api.GetAllCategeries().subscribe((res:any)=>{
      console.log(res);
  this.categeoies=res
    } ,error=>{
      alert(error)
    }
      
    )
   }
  filterCategeryes(event: any){
  let value=event.target.value;
  console.log(value)
  this.GetproductCategeries(value)
 
 }

 GetproductCategeries(keywored:string){
  this.api.GetproductbyCategeries(keywored).subscribe((res:any)=>{
this.productList=res
  })
}

  // filter(category:string){
  //   this.filterCategory=this.productList.filter((a:any)=>{
  //     if(a.category == category||category==''){
  //       return a;
  //     }
    // })

  // }
  
  //products:any[]=[];
 // categegies:any;
  
 
  // ngOnChanges(): void {
//  products:any;
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