import { Component } from '@angular/core';
import { CartService } from 'src/app/Core/Services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
public totalItem:number=0;
constructor(private cartservice:CartService){}
ngOnInit():void{
this.cartservice.getProducts().subscribe(res=>{
  this.totalItem=res.length;
})
}
}
