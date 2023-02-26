import { Component } from '@angular/core';
import { DemoService } from 'src/app/core/Services/demo.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.css']
})
export class FilteredComponent {
//   // ngOnChanges(): void {
//  products:any;
//   // }
//   // item:any=""
//   // menuitems:any[]=[]
//   // @Input() searhed:string=''
 
//   // images:any=["https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   // "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//   // "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//   // "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//   // "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"]
 
   
//   constructor(myService:DemoService){
//     // console.log(myService.GetAllUsers())
//     // myService.GetAllUsers().subscribe(
//     //   (data)=>{console.log(data)},
//     //   (err)=>{console.log(err)}
//     //   )


//     // console.log(this.images);
    

//     myService.GetAllProduct().subscribe(
//         {
//           next:(data)=>{

//             this.products = data;
//             console.log(this.products)
//           },
//           error:(err)=>{console.log(err)}
//         }
//       )
//  
categeoies:any[]=[];
  
protected:any[]=[];
 // categegies:any;
  
 constructor(private myService:DemoService,myActiviivated:ActivatedRoute){}
 ngOnInit():void
 {
 // this.GetAllCategeries()
  this.GetAllProduct()
 }
 GetAllProduct(){
  this.myService.GetAllProduct().subscribe((res:any)=>{
    console.log(res);
this.protected=res
  } ,error=>{
    alert(error)
  }
    
  )
 }
 
//  GetAllCategeries(){
//   this.myService.GetAllCategeries().subscribe((res:any)=>{
//     console.log(res);
// this.categeoies=res
//   } ,error=>{
//     alert(error)
//   }
    
//   )
//  }
 filterCategeryes(event: any){
  let value=event.target.value;
  console.log(value)
  this.GetproductCategeries(value)
 
 }

 GetproductCategeries(keywored:string){
  this.myService.GetproductbyCategeries(keywored).subscribe((res:any)=>{
this.protected=res
  })
}
 
}
