import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../Dto/Category';
import { HttpClient } from '@angular/common/http';
import { CategorySearchDto } from '../Dto/request/CategorySearchDto';

@Injectable({
  providedIn: 'root',
})
export class CategoryDtoApiService {
  constructor(private httpClient: HttpClient) {}

  save(category: Category): Observable<Category> {
    return this.httpClient.post<Category>('http://localhost:8080/category/save', category);
  }

  update(category: Category): Observable<Category> {
    //console.log(id);
    return this.httpClient.put<Category>(
      'http://localhost:8080/category/update/' + category.id,
      category
    );
    console.log(category.id);
  }

  delete(category: Category):Observable<boolean> {
    console.log(category.id);
    return this.httpClient
      .delete<boolean>('http://localhost:8080/category/delete/' + category.id);
      //.subscribe((e)=>{ });
    console.log('successfully Deleted...');
  }

  search(leaveSearchDto: CategorySearchDto): Observable<Array<Category>> {
    return this.httpClient.post<Array<Category>>(
      'http://localhost:8080/category/search',
      leaveSearchDto
    );
  }
}
