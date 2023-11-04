import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../Dto/Role';
import { HttpClient } from '@angular/common/http';
import { RoleSearchDto } from '../Dto/request/RoleSearchDto';

@Injectable({
  providedIn: 'root',
})
export class RoleDtoApiService {
  constructor(private httpClient: HttpClient) {}

  save(role: Role): Observable<Role> {
    return this.httpClient.post<Role>('http://localhost:8080/role/save', role);
  }

  update(role: Role): Observable<Role> {
    //console.log(id);
    return this.httpClient.put<Role>(
      'http://localhost:8080/role/update/' + role.id,
      role
    );
    console.log(role.id);
  }

  delete(role: Role):Observable<boolean> {
    console.log(role.id);
    return this.httpClient
      .delete<boolean>('http://localhost:8080/role/delete/' + role.id);
      //.subscribe((e)=>{ });
    console.log('successfully Deleted...');
  }

  search(roleSearchDto: RoleSearchDto): Observable<Array<Role>> {
    return this.httpClient.post<Array<Role>>(
      'http://localhost:8080/role/search',
      roleSearchDto
    );
  }
}
