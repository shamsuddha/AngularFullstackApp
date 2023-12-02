import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Employee } from "../entity/Employee";
import { EmployeeSearchDto } from "../dto/request/EmployeeSearchDto";

@Injectable({ providedIn: 'root' })
export class EmployeeController {

  constructor(private httpClient: HttpClient,) { }

  save(employee: Employee): Observable<Employee> {
    return this.httpClient.post<Employee>('http://localhost:8080/user-info-role/save', employee);
  }

  update(employee: Employee): Observable<Employee> {
    return this.httpClient.put<Employee>('http://localhost:8080/user-info-role/update', employee);
  }

  delete(employee: Employee): Observable<boolean> {
    return this.httpClient.delete<boolean>('http://localhost:8080/user-info-role/delete', { body: employee })
    //.subscribe((e)=>{ });
  }

  search(employeeSearchDto: EmployeeSearchDto): Observable<Array<Employee>> {
    return this.httpClient.post<Array<Employee>>('http://localhost:8080/user-info-role/search', employeeSearchDto);
  }

  searchWithEmployee(): Observable<Array<Employee>> {
    return this.httpClient.post<Array<Employee>>('http://localhost:8080/user-info-role/search-with-user-info-role',{});
  }
}
