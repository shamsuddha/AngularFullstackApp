import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveType } from '../Dto/LeaveType';
import { HttpClient } from '@angular/common/http';
import { LeaveTypeSearchDto } from '../Dto/request/LeaveTypeSearchDto';

@Injectable({
  providedIn: 'root',
})
export class LeaveTypeDtoApiService {
  constructor(private httpClient: HttpClient) {}

  save(leaveType: LeaveType): Observable<LeaveType> {
    return this.httpClient.post<LeaveType>('http://localhost:8080/leaveType/save', leaveType);
  }

  update(leaveType: LeaveType): Observable<LeaveType> {
    //console.log(id);
    return this.httpClient.put<LeaveType>(
      'http://localhost:8080/leaveType/update/' + leaveType.id,
      leaveType
    );
    console.log(leaveType.id);
  }

  delete(leaveType: LeaveType):Observable<boolean> {
    console.log(leaveType.id);
    return this.httpClient
      .delete<boolean>('http://localhost:8080/leaveType/delete/' + leaveType.id);
      //.subscribe((e)=>{ });
    console.log('successfully Deleted...');
  }

  search(leaveTypeSearchDto: LeaveTypeSearchDto): Observable<Array<LeaveType>> {
    return this.httpClient.post<Array<LeaveType>>(
      'http://localhost:8080/leaveType/search',
      leaveTypeSearchDto
    );
  }
}
