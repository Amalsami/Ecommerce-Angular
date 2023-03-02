import { Component, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{CartService}from'src/app/Core/Services/cart.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  public searchterm:string='';

  constructor(private CartService:CartService){}

search(event:any)
{
  this.searchterm=(event.target as HTMLInputElement).value;
  console.log(this.searchterm);
  this.CartService.search.next(this.searchterm);
}


//   products:any[]=[];
//   Filteredproducts=new Array();
//   constructor(private productsService:DemoService) {
//     this.products= productsService.GetAllProduct
//     this.Filteredproducts=this.products;
// }
  //search:any=''
  filtersearch:any=''
  select: string = '';//search
  cards:any[]=["all"]//button
  // menuCards= this.productservice.URL_DB
  filterByCategory(chip:any){
    // if (chip === "All") {
    //   this.filtersearch = this.menueitems;
    // }else
    // this.FilteriedMenu = this.menueItems.filter(item => item.category.toLocaleLowerCase().includes(chip.toLocaleLowerCase()));
  }

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


}