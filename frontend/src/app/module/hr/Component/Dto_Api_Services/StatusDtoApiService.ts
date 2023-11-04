import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from '../Dto/Status';
import { HttpClient } from '@angular/common/http';
import { StatusSearchDto } from '../Dto/request/StatusSearchDto';

@Injectable({
  providedIn: 'root',
})
export class StatusDtoApiService {
  constructor(private httpClient: HttpClient) {}

  save(status: Status): Observable<Status> {
    return this.httpClient.post<Status>('http://localhost:8080/status/save', status);
  }

  update(status: Status): Observable<Status> {
    //console.log(id);
    return this.httpClient.put<Status>(
      'http://localhost:8080/status/update/' + status.id,
      status
    );
    console.log(status.id);
  }

  delete(status: Status):Observable<boolean> {
    console.log(status.id);
    return this.httpClient
      .delete<boolean>('http://localhost:8080/status/delete/' + status.id);
      //.subscribe((e)=>{ });
    console.log('successfully Deleted...');
  }

  search(statusSearchDto: StatusSearchDto): Observable<Array<Status>> {
    return this.httpClient.post<Array<Status>>(
      'http://localhost:8080/status/search',
      statusSearchDto
    );
  }
}
