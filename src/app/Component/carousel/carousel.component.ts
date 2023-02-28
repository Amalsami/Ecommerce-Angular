import { Component, Input, AfterContentInit, ContentChildren, ViewChild, QueryList, ElementRef } from '@angular/core';
import { DemoService } from 'src/app/Core/Services/demo.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  products: any;

  constructor(myService: DemoService) {

    myService.GetAllProduct().subscribe(
      {
        next: (data) => {

          this.products = data;
          console.log(this.products)
        },
        error: (err) => { console.log(err) }
      }
    )
  }
}
