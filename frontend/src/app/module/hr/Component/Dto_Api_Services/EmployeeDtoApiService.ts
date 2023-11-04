import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Dto/Employee';
import { HttpClient } from '@angular/common/http';
import { EmployeeSearchDto } from '../Dto/request/EmployeeSearchDto';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDtoApiService {
  constructor(private httpClient: HttpClient) {}

  save(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>('http://localhost:8080/employee/save', employee);
  }

  update(employee: Employee): Observable<Employee> {
    //console.log(id);
    return this.httpClient.put<Employee>(
      'http://localhost:8080/employee/update/' + employee.id,
      employee
    );
    console.log(employee.id);
  }

  delete(employee: Employee):Observable<boolean> {
    console.log(employee.id);
    return this.httpClient
      .delete<boolean>('http://localhost:8080/employee/delete/' + employee.id);
      //.subscribe((e)=>{ });
    console.log('successfully Deleted...');
  }

  search(employeeSearchDto: EmployeeSearchDto): Observable<Array<Employee>> {
    return this.httpClient.post<Array<Employee>>(
      'http://localhost:8080/employee/search',
      employeeSearchDto
    );
  }
}
