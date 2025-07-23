import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

interface Product{
  sno:string;
  name:string;
  image:string;
  price:number;
  qty:number
}

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  public products:Product[]=[
    {
      sno: "AA101",
      name: "Apple Watch",
      image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg",
      price: 1500,
      qty: 2
    },
    {
      sno: "AA102",
      name: "Samsung Watch",
      image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg",
      price: 1500,
      qty: 2
    },
    {
      sno: "AA103",
      name: "Mi Watch",
      image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg",
      price: 1500,
      qty: 2
    },
    {
      sno: "AA104",
      name: "Oppo Watch",
      image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg",
      price: 1500,
      qty: 2
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
