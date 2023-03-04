import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from 'src/app/Core/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
public product:any=[]
public grandTotal!:number;
constructor(private cartservice:CartService,private http:HttpClient){}
ngOnInit():void{
  this.cartservice.getProducts().subscribe(res=>{
    this.product=res; 
    this.grandTotal=this.cartservice.getTotalPrice();
  })
}
removeItem(item:any){
this.cartservice.removeCartItem(item);
}
emptyCart(){
  this.cartservice.removeAllCart();
}
inc(item:any){
  if(item.quantity != 15){
    item.quantity += 1;
    item.total+=item.price
  }
}
dec(item:any){
    if(item.quantity != 1){
      item.quantity -= 1;
      item.total=item.total-item.price
    }else
    {
      this.removeItem(item);
    }
}

shopmore(product:any){
  localStorage.setItem('session',JSON.stringify(product))
}
// checkout(product:any){

//   let arr =[];
//   try {
//     for (const i of product) {
//       arr.push({"productId": i.id , "productAmount":i.quantity})
//   } 
//   } catch (error) {
//     console.log(error); 
//   }
//   let OrderData={
//   "userId": "1",
//   "paymentId": 2,
//   "orderName": "hjkl",
//   "products":arr
//   }
//   console.log(OrderData);
// }
url="https://localhost:7032/api/Products/AddProductsToShoppingOrder";
json:any;

checkout(product:any){
  let arr =[];
  try {
    for (const i of product) {
      arr.push({"productId": i.id , "productAmount":i.quantity})
  } 
  } catch (error) {
    console.log(error); 
  }
  let OrderData={
  "userId": "cb833913-fb85-4db2-9079-2a9219c9ce14",
  "paymentId": 1,
  "orderName": "hjklhjk",
  "products":arr
  }
this.http.post(this.url,OrderData).toPromise().then((data:any)=>{
  console.log(data);
  this.json=JSON.stringify(data.json)
})
this.emptyCart();
}


}
