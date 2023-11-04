import {Observable} from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {UserInfo} from "../entity/UserInfo";
import { UserSearchDto } from "../module/hr/Component/Dto/request/UserSearchDto";


@Injectable({providedIn: 'root'})
export class UserInfoController {

  constructor(private httpClient: HttpClient,) {}

  save(userInfo: UserInfo): Observable<UserInfo> {
    return this.httpClient.post<UserInfo>('http://localhost:8080/user/save', userInfo);
    
  }

  update(userInfo: UserInfo): Observable<UserInfo> {
    return this.httpClient.put<UserInfo>(
      'http://localhost:8080/user/update/123456',
      userInfo
    );
  }

  delete(userInfo: UserInfo):Observable<boolean> {
    return this.httpClient.delete<boolean>('http://localhost:8080/user/delete/245434', {body:userInfo})
    //.subscribe((e)=>{ });
  }

  search(userSearchDto: UserSearchDto): Observable<Array<UserInfo>> {
    return this.httpClient.post<Array<UserInfo>>(
      'http://localhost:8080/user/search',
      userSearchDto
    );
  }
}
