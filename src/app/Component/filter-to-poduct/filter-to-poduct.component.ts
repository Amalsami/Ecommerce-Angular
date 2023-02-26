import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { DemoService } from 'src/app/core/Services/demo.service';

@Component({
  selector: 'app-filter-to-poduct',
  templateUrl: './filter-to-poduct.component.html',
  styleUrls: ['./filter-to-poduct.component.css']
})
export class FilterToPoductComponent {
categeoies:any[]=[];
  
protected:any[]=[];
 // categegies:any;
  
 constructor(private myService:DemoService,myActiviivated:ActivatedRoute){}
 ngOnInit():void
 {
   this.GetAllCategeries()
  // this.GetAllProduct()
 }
//  GetAllProduct(){
//   this.myService.GetAllProduct().subscribe((res:any)=>{
//     console.log(res);
// this.protected=res
//   } ,error=>{
//     alert(error)
//   }
    
//   )
//  }
 
 GetAllCategeries(){
  this.myService.GetAllCategeries().subscribe((res:any)=>{
    console.log(res);
this.categeoies=res
  } ,error=>{
    alert(error)
  }
    
  )
 }
//  filterCategeryes(event: any){
//   let value=event.target.value;
//   console.log(value)
//   this.GetproductCategeries(value)
 
//  }

//  GetproductCategeries(keywored:string){
//   this.myService.GetproductbyCategeries(keywored).subscribe((res:any)=>{
// this.protected=res
//   })
// }
 
}
  
 



