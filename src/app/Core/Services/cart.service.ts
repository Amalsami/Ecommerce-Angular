import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartItemList : any=[]
public ProductList=new BehaviorSubject<any>([]);
public search=new BehaviorSubject<string>("");
  constructor() { }
  getProducts(){
    return this.ProductList.asObservable();
  }
  setProduct(product:any){
    this.cartItemList.push(...product);
    this.ProductList.next(product);
  }
}
