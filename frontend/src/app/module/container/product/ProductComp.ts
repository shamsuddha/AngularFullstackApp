import { Component } from "@angular/core";

@Component({
  selector: 'ProductComp',
  templateUrl:'./ProductComp.html',
  styleUrls: ['./ProductComp.scss']
})
export class ProductComp{

  name: string = "bangladesh";
  addToCart: number = 0;

  product = {
    name: 'iphone',
    price: 999,
    color: 'Red',
    discount: 10,
    stock: 5,
    image: 'https://www.spigen.com.bd/image/cache/catalog/Accessories/iPhone%2013%20Pro%20Max%20Full%20Coverage%20HD%20Tempered%20Glass/1-910x1155.jpg'
  }


  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount)/100;
  }

  onInputChange(event: any)
  {
    this.name = event.target.value;
    console.log(event.target.value);
  }

  incrementCart()
  {
    if(this.addToCart < this.product.stock)
    {
      this.addToCart++;
    }
  }

  decrementCart()
  {
    if(this.addToCart > 0)
    {
      this.addToCart--;
    }
  }







  

}