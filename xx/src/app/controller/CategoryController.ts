import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../entity/Category";
import { CategorySearchDto } from "./search_dto/CategorySearchDto";
import { HttpClient } from "@angular/common/http";


@Injectable({ providedIn: 'root' })
export class CategoryController {

  constructor(private httpClient: HttpClient) { }

  save(category: Category): Observable<Category> {
    return this.httpClient.post<Category>('http://localhost:8080/category/save', category);
  }

  update(category: Category): Observable<Category> {
    return this.httpClient.put<Category>('http://localhost:8080/category/update', category);
  }

  delete(category: Category): Observable<boolean> {
    return this.httpClient.delete<boolean>('http://localhost:8080/category/delete', { body: category })
    //.subscribe((e)=>{ });
  }

  search(categorySearchDto: CategorySearchDto): Observable<Array<Category>> {
    return this.httpClient.post<Array<Category>>('http://localhost:8080/category/search', categorySearchDto);
  }
}
