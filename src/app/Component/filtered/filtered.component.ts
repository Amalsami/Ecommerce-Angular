import { Component } from '@angular/core';
import { DemoService } from 'src/app/Core/Services/demo.service';
import { ProductServiceService } from 'src/app/Core/Services/product-service.service';
@Component({
  selector: 'app-filtered',
  templateUrl: './filtered.component.html',
  styleUrls: ['./filtered.component.css']
})
export class FilteredComponent {

  products:any;

  constructor(myService:DemoService){


    myService.GetAllProduct().subscribe(
        {
          next:(data)=>{

            this.products = data;
            console.log(this.products)
          },
          error:(err)=>{console.log(err)}
        }
      )
  }
  //   myService.getALLProduct().subscribe(
  //       {
  //         next:(data)=>{

  //           this.products = data;
  //           console.log(this.products)
  //         },
  //         // error:(err)=>{console.log(err)}
  //       }
  //     )
  // }
}
