import { Component, Input, OnInit } from '@angular/core';
import { DemoService } from 'src/app/Core/Services/demo.service';
import { CartService } from 'src/app/Core/Services/cart.service'

import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.css']
})
export class FilteredComponent {
  searchKey: string = "";
  // categeoies:any[]=[];
  public productList: any;
  public product: any;

  public filterCategory: any;
  @Input() items: any = [];
  @Input() term: string = '';



  constructor(private api: DemoService, private CartService: CartService) {
    api.GetAllProduct().subscribe(
      {
        next: (data) => {
          //console.log(data)
          this.items = data;
        },
        error: (err) => { console.log(err) }
      }
    )
  }

  // ngOnInit(): void {

  // }

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
  addToCart(item: any) {
    this.CartService.addToCart(item);
  }

  // filter(category: string) {
  //   this.filterCategory = this.productList.filter((a: any) => {
  //     if (a.category == category || category == '') {
  //       return a;
  //     }
  //   })
  // }

  //products:any[]=[];
  // categegies:any;


  // ngOnChanges(): void {




}

