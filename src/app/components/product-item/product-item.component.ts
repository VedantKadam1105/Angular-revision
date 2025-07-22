import { Component, OnInit } from '@angular/core';

interface Product{
  sno:string;
  name:string;
  image:string;
  qty:number;
  price:number
}


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  public product:Product={
    sno:"aa1",
    name:"apple",
    image:"https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
    qty:2,
    price:20
  }
  constructor() { }

  ngOnInit(): void {
  }

  public incrementQty(){
    this.product.qty++;
  }
    public decrementQty(){
      if(this.product.qty>0)
    this.product.qty--
  }
}
