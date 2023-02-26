import { Component, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ActivatedRoute} from '@angular/router'
//import { DemoService } from 'src/app/Core/Services/demo.service.ts';
import { DemoService } from 'src/app/core/Services/demo.service'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  protected:any[]=[];
  constructor(private myService:DemoService,myActiviivated:ActivatedRoute){}
  ngOnInit():void
  { 
  
  }


  search:any=''
  filtersearch:any=''
  select: string = '';
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.filtersearch= this.search.filter((search:any) => this.search.Name.toLowerCase().includes(filterValue.toLowerCase())) ;
  }
  //  @Output() select:any=0;

  // filtereditem:any []=[]
  // menuitems:any[]=[]
  // catbyid:any=0
  /**
   *
   */ 
  // keywored:string;
  // constructor(myService:DemoService,myActiviivated:ActivatedRoute){
  //  this.keywored=myActiviivated.snapshot.params["keywored"];
  //  myService.GetproductbyCategeries(this.keywored).subscribe(
  //    {
  //      next:(data)=>{
  //        this.protected=data;
  //      },
  //      error:(err)=>{console.log(err)}
       
  //    }
  //  )
  // }

  // selected(){
  //  this.filtereditem= this.menuitems.filter(pr=>pr.category==this.catbyid)
  // }

  
  // GetproductCategeries(keywored:string){
  //   this.myService.GetproductbyCategeries(keywored).subscribe((res:any)=>{
  // this.protected=res
  //   })
  // }

 
  
}
