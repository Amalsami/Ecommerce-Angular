import { Component, Input ,AfterContentInit, ContentChildren, ViewChild, QueryList, ElementRef } from '@angular/core';

interface carouselImage{
  imageSrc:string;
  imgAlt:string;
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
 
}
