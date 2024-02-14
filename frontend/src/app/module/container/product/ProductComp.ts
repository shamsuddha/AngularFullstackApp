import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'ProductComp',
  templateUrl: './ProductComp.html',
  styleUrls: ['./ProductComp.scss']
})
export class ProductComp implements OnInit {

  ngOnInit() {
    //this.handleEvent();

  }


  name: string = "bangladesh";
  addToCart: number = 0;
  listOfString: string[] = ['rajit', 'asma', 'bangladesh'];



  productList =
    [
      {
        id: 1,
        name: 'Product One',
        description: 'Product One Description one',
        brand: 'brand One',
        category: 'category One',
        is_in_inventory: true,
        price: 200,
        color: 'Green',
        discount: 10,
        stock: 5,
        image: 'https://www.spigen.com.bd/image/cache/catalog/Accessories/iPhone%2013%20Pro%20Max%20Full%20Coverage%20HD%20Tempered%20Glass/1-910x1155.jpg'
      },

      {
        id: 2,
        name: 'Product Two',
        description: 'Product Two Description Two',
        brand: 'brand Two',
        category: 'category Two',
        is_in_inventory: false,
        price: 999,
        color: 'Red',
        discount: 10,
        stock: 5,
        image: 'https://www.spigen.com.bd/image/cache/catalog/Accessories/iPhone%2013%20Pro%20Max%20Full%20Coverage%20HD%20Tempered%20Glass/1-910x1155.jpg'
      },

      {
        id: 3,
        name: 'Product Three',
        description: 'Product Three Description Three',
        brand: 'brand Three',
        category: 'category Three',
        is_in_inventory: true,
        price: 888,
        color: 'Red',
        discount: 20,
        stock: 0,
        image: 'https://www.spigen.com.bd/image/cache/catalog/Accessories/iPhone%2013%20Pro%20Max%20Full%20Coverage%20HD%20Tempered%20Glass/1-910x1155.jpg'
      },

      {
        id: 4,
        name: 'Product Four',
        description: 'Product Four Description Four',
        brand: 'brand Four',
        category: 'category Four',
        is_in_inventory: true,
        price: 100,
        color: 'Yellow',
        discount: 5,
        stock: 50,
        image: 'https://www.spigen.com.bd/image/cache/catalog/Accessories/iPhone%2013%20Pro%20Max%20Full%20Coverage%20HD%20Tempered%20Glass/1-910x1155.jpg'
      },


      {
        id: 5,
        name: 'Product Five',
        description: 'Product Five Description Five',
        brand: 'brand Five',
        category: 'category Five',
        is_in_inventory: true,
        price: 1000,
        color: 'Red',
        discount: 50,
        stock: 500,
        image: 'https://www.spigen.com.bd/image/cache/catalog/Accessories/iPhone%2013%20Pro%20Max%20Full%20Coverage%20HD%20Tempered%20Glass/1-910x1155.jpg'
      },


      {
        id: 6,
        name: 'Product Six',
        description: 'Product Six Description Six',
        brand: 'brand Six',
        category: 'category Six',
        is_in_inventory: true,
        price: 999,
        color: 'Red',
        discount: 10,
        stock: 5,
        image: 'https://www.spigen.com.bd/image/cache/catalog/Accessories/iPhone%2013%20Pro%20Max%20Full%20Coverage%20HD%20Tempered%20Glass/1-910x1155.jpg'
      },


      {
        id: 7,
        name: 'Product Seven',
        description: 'Product Seven Description Seven',
        brand: 'brand Seven',
        category: 'category Seven',
        is_in_inventory: true,
        price: 999,
        color: 'Red',
        discount: 10,
        stock: 5,
        image: 'https://www.spigen.com.bd/image/cache/catalog/Accessories/iPhone%2013%20Pro%20Max%20Full%20Coverage%20HD%20Tempered%20Glass/1-910x1155.jpg'
      },


      {
        id: 8,
        name: 'Product Eight',
        description: 'Product Eight Description Eight',
        brand: 'brand Eight',
        category: 'category Eight',
        is_in_inventory: false,
        price: 999,
        color: 'Red',
        discount: 10,
        stock: 5,
        image: 'https://www.spigen.com.bd/image/cache/catalog/Accessories/iPhone%2013%20Pro%20Max%20Full%20Coverage%20HD%20Tempered%20Glass/1-910x1155.jpg'
      },



      {
        id: 9,
        name: 'Product Nine',
        description: 'Product Nine Description Nine',
        brand: 'brand Nine',
        category: 'category Nine',
        is_in_inventory: false,
        price: 999,
        color: 'Red',
        discount: 10,
        stock: 5,
        image: 'https://www.spigen.com.bd/image/cache/catalog/Accessories/iPhone%2013%20Pro%20Max%20Full%20Coverage%20HD%20Tempered%20Glass/1-910x1155.jpg'
      },


      {
        id: 10,
        name: 'Product Ten',
        description: 'Product Ten Description Ten',
        brand: 'brand Ten',
        category: 'category Ten',
        is_in_inventory: true,
        price: 999,
        color: 'Red',
        discount: 10,
        stock: 5,
        image: 'https://www.spigen.com.bd/image/cache/catalog/Accessories/iPhone%2013%20Pro%20Max%20Full%20Coverage%20HD%20Tempered%20Glass/1-910x1155.jpg'
      }
    ]

  productListCount: number = this.productList.length;
  inStockCount: number = this.productList.filter((e) => e.is_in_inventory == true).length;
  outOfStockCount: number = this.productList.filter((e) => e.is_in_inventory == false).length;

  eventValue: string = "all";

  filteredProductList: Array<{
    id: number, name: string,
    description: string,
    brand: string,
    category: string,
    is_in_inventory: boolean,
    price: number,
    color: string,
    discount: number,
    stock: number,
    image: string
  }> = [];


  handleEvent(data: any) {

    this.filteredProductList = this.productList.filter((e) => {
      if(data == " " || data == "all")
      {
        return this.productList;
      }
      else if(data == "instock")
      {
        return e.is_in_inventory == true;
      }
      else
      {
        return e.is_in_inventory == false;
      }
    })
  }






  // getDiscountedPrice(){
  //   return this.productList.price - (this.productList.price * this.productList.discount)/100;
  // }

  // onInputChange(event: any)
  // {
  //   this.name = event.target.value;
  //   console.log(event.target.value);
  // }

  // incrementCart()
  // {
  //   if(this.addToCart < this.productList.stock)
  //   {
  //     this.addToCart++;
  //   }
  // }

  // decrementCart()
  // {
  //   if(this.addToCart > 0)
  //   {
  //     this.addToCart--;
  //   }
  // }









}