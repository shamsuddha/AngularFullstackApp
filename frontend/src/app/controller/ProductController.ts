import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../entity/Product";
import { ProductSearchDto } from "../dto/request/ProductSearchDto";


@Injectable({ providedIn: 'root' })
export class ProductController {

  constructor(private httpClient: HttpClient,) { }

  save(product: Product): Observable<Product> {
    return this.httpClient.post<Product>('http://localhost:8080/product/save', product);
  }

  update(product: Product): Observable<Product> {
    return this.httpClient.put<Product>('http://localhost:8080/product/update', product);
  }

  delete(product: Product): Observable<boolean> {
    return this.httpClient.delete<boolean>('http://localhost:8080/product/delete', { body: product })
    //.subscribe((e)=>{ });
  }

  search(productSearchDto: ProductSearchDto): Observable<Array<Product>> {
    return this.httpClient.post<Array<Product>>('http://localhost:8080/product/search', productSearchDto);
  }
}
