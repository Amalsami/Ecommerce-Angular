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
  searchKey:string="";
 categeoies:any[]=[];
 public productList:any;
 public product:any[]=[];
 searchterm:string='';
 filtersearch:any=[];
 select: string = '';//search
 cards:any[]=["all"]//button

 public filterCategory:any;
  constructor(private api:DemoService ,private CartService:CartService){
  }
  ngOnInit(): void {

  }

  Chips:string[]=['accsesories', 'mobiles'];
  filterByCategory(name:string){
    this.api.GetproductbyCategeries(name).subscribe((res) =>{
      console.log("category", res);
      this.filtersearch= res;
    });
  }

//  this.api.GetAllProduct().subscribe(res=>{
//  this.productList=res;
//  this.filterCategory=res;}

  // GetAllCategeries() {
  //   this.api.GetAllCategeries().subscribe(res=>{
  //     console.log(res)
  //     this.productList=res;
  //      this.filterCategory=res;})
  // }
  // filterByCategory(event: any) {
  //   let value = event.target.value
  //   console.log(value)
  //   this.getprodcat(value)
  //   //   // if (card === "All") {
  //   //   //   this.filtersearch = this.menuCards;
  //   //   // }else
  //   //   // this.filtersearch = this.menuCards.filter(item => item.category.toLocaleLowerCase().includes(card.toLocaleLowerCase()));
  //   }
  //   getprodcat(anywored:string){
  //     this.api.GetproductbyCategeries(anywored).subscribe((res:any)=>{
  //       this.filtersearch=res
  //     })
  //   }


  // menuCards[]= this.api.GetAllProduct
  // filterByCategory(card:any){
  //   // if (card === "All") {
  //   //   this.filtersearch = this.menuCards;
  //   // }else
  //   // this.filtersearch = this.menuCards.filter(item => item.category.toLocaleLowerCase().includes(card.toLocaleLowerCase()));
  // }
  // // filterData() {
  // //   this.filtersearch = this.menuCards.filter(item => item.name.includes(this.searchterm));
  // // }
  // filterData() {
  //   // this.filtersearch = this.menuCards.filter(item => item.name.includes(this.searchterm)).pipe(
  //   //   filter(item => item !== null)
  //   // );
  // }

}
  // searchterm: string = '';
  // filtersearch: any[] = [];
  // select: string = '';
  // cards: any[] = ['all'];
  // menuCards: any[] = [];



  // constructor(private demoService: DemoService) {}

  // async ngOnInit() {
  //   try {
  //     this.menuCards = await this.demoService.GetAllProduct().toPromise();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // filterByCategory(card: any) {
  //   // if (card === "All") {
  //   //   this.filtersearch = this.menuCards;
  //   // }else
  //   // this.filtersearch = this.menuCards.filter(item => item.category.toLocaleLowerCase().includes(card.toLocaleLowerCase()));
  // }

  // filterData() {
  //   this.filtersearch = this.menuCards.filter(item => item.name.includes(this.searchterm));
  // }




// search(event:any)
// {
//   this.searchterm=(event.target as HTMLInputElement).value;
//   console.log(this.searchterm);
//   this.CartService.search.next(this.searchterm);
// }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.filtersearch= this.search.filter((search:any) => this.search.Name.toLowerCase().includes(filterValue.toLowerCase())) ;
  // }
  //  @Output() select:any=0;

  // filtereditem:any []=[]
  // menuitems:any[]=[]
  // catbyid:any=0
  /**
   *
   */

  // selected(){
  //  this.filtereditem= this.menuitems.filter(pr=>pr.category==this.catbyid)
  // }



