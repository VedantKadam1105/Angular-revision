import { AfterViewInit, Component, OnInit } from '@angular/core';

interface Product {
  sno: string;
  name: string;
  image: string;
  price: number;
  qty: number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public products: Product[] = [
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
  public total: number = 0;
  constructor() { }

  ngOnInit(): void {

  }



  public incrementQty(product: Product) {
    product.qty++;
  }
  public decrementQty(product: Product) {
    if (product.qty > 0)
      product.qty--
  }
  public calculateTotal(): number {
    let sum = 0;
    for (let index = 0; index < this.products.length; index++) {
      const element = this.products[index];
      sum = sum + element.price * element.qty;
    }
    this.total = sum;
    return this.total
  }


}
