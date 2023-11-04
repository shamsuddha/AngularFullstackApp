import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Designation } from '../Dto/Designation';
import { HttpClient } from '@angular/common/http';
import { DesignationSearchDto } from '../Dto/request/DesignationSearchDto';

@Injectable({
  providedIn: 'root',
})
export class DesignationDtoApiService {
  constructor(private httpClient: HttpClient) {}

  save(designation: Designation): Observable<Designation> {
    return this.httpClient.post<Designation>('http://localhost:8080/designation/save', designation);
  }

  update(designation: Designation): Observable<Designation> {
    //console.log(id);
    return this.httpClient.put<Designation>(
      'http://localhost:8080/designation/update/' + designation.id,
      designation
    );
    console.log(designation.id);
  }

  delete(designation: Designation):Observable<boolean> {
    console.log(designation.id);
    return this.httpClient
      .delete<boolean>('http://localhost:8080/designation/delete/' + designation.id);
      //.subscribe((e)=>{ });
    console.log('successfully Deleted...');
  }

  search(leaveSearchDto: DesignationSearchDto): Observable<Array<Designation>> {
    return this.httpClient.post<Array<Designation>>(
      'http://localhost:8080/designation/search',
      leaveSearchDto
    );
  }
}
