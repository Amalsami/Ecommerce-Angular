import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { DemoService } from 'src/app/Core/Services/demo.service';
import{CartService}from'src/app/Core/Services/cart.service'

@Component({
  selector: 'app-filter-to-poduct',
  templateUrl: './filter-to-poduct.component.html',
  styleUrls: ['./filter-to-poduct.component.css']
})
export class FilterToPoductComponent {
// categeoies:any[]=[];
  
 protected:any[]=[];
//  // categegies:any;
  
//  constructor(private myService:DemoService,myActiviivated:ActivatedRoute){}

// transform(value:any[],filterString:string,propName:string):any[]{
//   const result:any=[];
//   if(!value||filterString===''||propName===''){
//     return value;
//   }
//   value.forEach((a:any)=>{
//     if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
//       result.push(a);
//     }
//   });
//   return result;

// }

searchKey:string="";
 categeoies:any[]=[];
public productList:any;
public filterCategory:any;


 constructor(private api:DemoService ,private CartService:CartService){
 }
 ngOnInit():void{
  this.GetAllCategeries()
 
this.api.GetAllProduct().subscribe(res=>{
this.productList=res;
this.categeoies=res;
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
 filter(category:string){
   this.filterCategory=this.productList.filter((a:any)=>{
     if(a.category == category||category==''){
       return a;
     }
   })
 }




//  ngOnInit():void
//  {
//    this.GetAllCategeries()
//   //this.GetAllProduct()
//  }
//  GetAllProduct(){
//   this.api.GetAllProduct().subscribe((res:any)=>{
//     console.log(res);
// this.protected=res
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
  // }
//  filterCategeryes(event: any){
//   let value=event.target.value;
//   console.log(value)
//   this.GetproductCategeries(value)
 
//  }

//  GetproductCategeries(keywored:string){
//   this.api.GetproductbyCategeries(keywored).subscribe((res:any)=>{
// this.protected=res
//   })
}
 
}
  
 



