import { Component, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{CartService}from'src/app/Core/Services/cart.service'
import { DemoService } from 'src/app/Core/Services/demo.service';
import { BehaviorSubject, Observable } from 'rxjs';
// import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // searchKey:string="";
//  categeoies:any[]=[];
//  public productList:any;
//  public product:any[]=[];
 searchterm:string='';
 filtersearch:any=[];

 public filterCategory:any;
  constructor(private api:DemoService ,private CartService:CartService){
  }
  ngOnInit(): void {

  }

  Chips:any[]=[1,2];
  filterByCategory(name:string){
    this.api.GetproductbyCategeries(name).subscribe((res) =>{
      console.log("category", res);
      this.filtersearch= res;
      // res.forEach((element: any) => {
      //   this.filtersearch.push(element)

      });
      // this.filtersearch= res;
    };
  }






