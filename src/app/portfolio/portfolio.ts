import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})


export class Portfolio {
admn:string='user'


//   imgSrc:string ='/poert1.png'
// change(){
//     this.imgSrc='/port2.png'
// }

imgsSrc:string[]=[ 'poert1.png', 'port2.png', 'port3.png','poert1.png', 'port2.png', 'port3.png']
selectedImage: string | null = null;
change(img: string) {
  this.selectedImage = img;
}
}

