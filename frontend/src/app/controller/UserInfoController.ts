import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserSearchDto } from "../dto/request/UserSearchDto";
import { UserInfo } from "../entity/UserInfo";


@Injectable({ providedIn: 'root' })
export class UserInfoController {

  constructor(private httpClient: HttpClient,) { }

  save(userInfo: UserInfo): Observable<UserInfo> {
    return this.httpClient.post<UserInfo>('http://localhost:8080/user-info/save', userInfo);
  }

  update(userInfo: UserInfo): Observable<UserInfo> {
    return this.httpClient.put<UserInfo>('http://localhost:8080/user-info/update', userInfo);
  }

  delete(userInfo: UserInfo): Observable<boolean> {
    return this.httpClient.delete<boolean>('http://localhost:8080/user-info/delete', { body: userInfo })
    //.subscribe((e)=>{ });
  }

  search(userSearchDto: UserSearchDto): Observable<Array<UserInfo>> {
    return this.httpClient.post<Array<UserInfo>>('http://localhost:8080/user-info/search', userSearchDto);
  }
}
