import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Dto/Product';
import { HttpClient } from '@angular/common/http';
import { ProductSearchDto } from '../Dto/request/ProductSearchDto';

@Injectable({
  providedIn: 'root',
})
export class ProductDtoApiService {
  constructor(private httpClient: HttpClient) {}

  save(product: Product): Observable<Product> {
    return this.httpClient.post<Product>('http://localhost:8080/product/save', product);
  }

  update(product: Product): Observable<Product> {
    //console.log(id);
    return this.httpClient.put<Product>(
      'http://localhost:8080/product/update/' + product.id,
      product
    );
    console.log(product.id);
  }

  delete(product: Product):Observable<boolean> {
    console.log(product.id);
    return this.httpClient
      .delete<boolean>('http://localhost:8080/product/delete/' + product.id);
      //.subscribe((e)=>{ });
    console.log('successfully Deleted...');
  }

  search(productSearchDto: ProductSearchDto): Observable<Array<Product>> {
    return this.httpClient.post<Array<Product>>(
      'http://localhost:8080/product/search',
      productSearchDto
    );
  }
}
