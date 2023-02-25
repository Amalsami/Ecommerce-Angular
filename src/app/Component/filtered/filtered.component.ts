import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.css']
})
export class FilteredComponent implements OnChanges {
  ngOnChanges(): void {

  }
  item:any=""
  menuitems:any[]=[]
  @Input() searhed:string=''
  constructor() {
  this.menuitems = [
    {id: 1, name:'accsesories', price: 50, url:'../../../assets/imges/images (0).jpg', category: 'accsesories', quantity: 1},
    {id: 2, name:'accsesories', price: 70, url:'../../../assets/imges/images (29).jpg', category: 'accsesories', quantity: 1},
    {id: 3, name:'couch', price: 120, url:'../../../assets/imges/images (9).jpg', category: 'couch', quantity: 1}
  ]
}
  addItem(item: any){
    this.item=item

  }
}
