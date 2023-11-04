import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Leave } from '../Dto/Leave';
import { HttpClient } from '@angular/common/http';
import { LeaveSearchDto } from '../Dto/request/LeaveSearchDto';

@Injectable({
  providedIn: 'root',
})
export class LeaveDtoApiService {
  constructor(private httpClient: HttpClient) {}

  save(leave: Leave): Observable<Leave> {
    return this.httpClient.post<Leave>('http://localhost:8080/leave/save', leave);
  }

  update(leave: Leave): Observable<Leave> {
    //console.log(id);
    return this.httpClient.put<Leave>(
      'http://localhost:8080/leave/update/' + leave.id,
      leave
    );
    console.log(leave.id);
  }

  delete(leave: Leave):Observable<boolean> {
    console.log(leave.id);
    return this.httpClient
      .delete<boolean>('http://localhost:8080/leave/delete/' + leave.id);
      //.subscribe((e)=>{ });
    console.log('successfully Deleted...');
  }

  search(leaveSearchDto: LeaveSearchDto): Observable<Array<Leave>> {
    return this.httpClient.post<Array<Leave>>(
      'http://localhost:8080/leave/search',
      leaveSearchDto
    );
  }
}
