import { Component, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{CartService}from'src/app/Core/Services/cart.service'
import { DemoService } from 'src/app/Core/Services/demo.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {




  constructor(private demoService:DemoService){}

// search(event:any)
// {
//   this.searchterm=(event.target as HTMLInputElement).value;
//   console.log(this.searchterm);
//   this.CartService.search.next(this.searchterm);
// }
  searchterm:string='';
  filtersearch:any=[];
  select: string = '';//search
  cards:any[]=["all"]//button
  menuCards= this.demoService.GetAllProduct
  filterByCategory(card:any){
    // if (card === "All") {
    //   this.filtersearch = this.menuCards;
    // }else
    // this.filtersearch = this.menuCards.filter(item => item.category.toLocaleLowerCase().includes(card.toLocaleLowerCase()));
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
