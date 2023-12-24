import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BrandSearchDto } from "../dto/request/BrandSearchDto";
import { Brand } from "../entity/Brand";


@Injectable({ providedIn: 'root' })
export class BrandController {

  constructor(private httpClient: HttpClient,) { }

  save(brand: Brand): Observable<Brand> {
    return this.httpClient.post<Brand>('http://localhost:8080/brand/save', brand);
  }

  update(brand: Brand): Observable<Brand> {
    return this.httpClient.put<Brand>('http://localhost:8080/brand/update', brand);
  }

  delete(brand: Brand): Observable<boolean> {
    return this.httpClient.delete<boolean>('http://localhost:8080/brand/delete', { body: brand })
    //.subscribe((e)=>{ });
  }

  search(brandSearchDto: BrandSearchDto): Observable<Array<Brand>> {
    return this.httpClient.post<Array<Brand>>('http://localhost:8080/brand/search', brandSearchDto);
  }
}
