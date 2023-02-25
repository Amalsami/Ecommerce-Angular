import { Component, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {

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

  // selected(){
  //  this.filtereditem= this.menuitems.filter(pr=>pr.category==this.catbyid)
  // }


}
