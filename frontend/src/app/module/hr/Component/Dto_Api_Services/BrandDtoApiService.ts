import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../Dto/Brand';
import { HttpClient } from '@angular/common/http';
import { BrandSearchDto } from '../Dto/request/BrandSearchDto';

@Injectable({
  providedIn: 'root',
})
export class BrandDtoApiService {
  constructor(private httpClient: HttpClient) {}

  save(brand: Brand): Observable<Brand> {
    return this.httpClient.post<Brand>('http://localhost:8080/brand/save', brand);
  }

  update(brand: Brand): Observable<Brand> {
    //console.log(id);
    return this.httpClient.put<Brand>(
      'http://localhost:8080/brand/update/' + brand.id,
      brand
    );
    console.log(brand.id);
  }

  delete(brand: Brand):Observable<boolean> {
    console.log(brand.id);
    return this.httpClient
      .delete<boolean>('http://localhost:8080/brand/delete/' + brand.id);
      //.subscribe((e)=>{ });
    console.log('successfully Deleted...');
  }

  search(brandSearchDto: BrandSearchDto): Observable<Array<Brand>> {
    return this.httpClient.post<Array<Brand>>('http://localhost:8080/brand/search', brandSearchDto);
  }
}
