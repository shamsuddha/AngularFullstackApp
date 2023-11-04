import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salary } from '../Dto/Salary';
import { HttpClient } from '@angular/common/http';
import { SalarySearchDto } from '../Dto/request/SalarySearchDto';

@Injectable({
  providedIn: 'root',
})
export class SalaryDtoApiService {
  constructor(private httpClient: HttpClient) {}

  save(salary: Salary): Observable<Salary> {
    return this.httpClient.post<Salary>('http://localhost:8080/salary/save', salary);
  }

  update(salary: Salary): Observable<Salary> {
    //console.log(id);
    return this.httpClient.put<Salary>(
      'http://localhost:8080/salary/update/' + salary.id,
      salary
    );
    console.log(salary.id);
  }

  delete(salary: Salary):Observable<boolean> {
    console.log(salary.id);
    return this.httpClient
      .delete<boolean>('http://localhost:8080/salary/delete/' + salary.id);
      //.subscribe((e)=>{ });
    console.log('successfully Deleted...');
  }

  search(salarySearchDto: SalarySearchDto): Observable<Array<Salary>> {
    return this.httpClient.post<Array<Salary>>(
      'http://localhost:8080/salary/search',
      salarySearchDto
    );
  }
}
