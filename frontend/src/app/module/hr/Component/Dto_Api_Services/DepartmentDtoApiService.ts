import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../Dto/Department';
import { HttpClient } from '@angular/common/http';
import { DepartmentSearchDto } from '../Dto/request/DepartmentSearchDto';

@Injectable({
  providedIn: 'root',
})
export class DepartmentDtoApiService {
  constructor(private httpClient: HttpClient) {}

  save(department: Department): Observable<Department> {
    return this.httpClient.post<Department>('http://localhost:8080/department/save', department);
  }

  update(department: Department): Observable<Department> {
    //console.log(id);
    return this.httpClient.put<Department>(
      'http://localhost:8080/department/update/' + department.id,
      department
    );
    console.log(department.id);
  }

  delete(department: Department):Observable<boolean> {
    console.log(department.id);
    return this.httpClient
      .delete<boolean>('http://localhost:8080/department/delete/' + department.id);
      //.subscribe((e)=>{ });
    console.log('successfully Deleted...');
  }

  search(leaveSearchDto: DepartmentSearchDto): Observable<Array<Department>> {
    return this.httpClient.post<Array<Department>>(
      'http://localhost:8080/department/search',
      leaveSearchDto
    );
  }
}
