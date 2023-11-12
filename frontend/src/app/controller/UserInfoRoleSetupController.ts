import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInfoRole } from "../entity/UserInfoRole";
import { UserInfoRoleSearchDto } from "../dto/request/UserInfoRoleSearchDto";

@Injectable({ providedIn: 'root' })
export class UserInfoRoleSetupController {

  constructor(private httpClient: HttpClient,) { }

  save(userInfoRole: UserInfoRole): Observable<UserInfoRole> {
    return this.httpClient.post<UserInfoRole>('http://localhost:8080/userInfoRole/save', userInfoRole);
  }

  update(userInfoRole: UserInfoRole): Observable<UserInfoRole> {
    return this.httpClient.put<UserInfoRole>('http://localhost:8080/userInfoRole/update/23423', userInfoRole);
  }

  delete(userInfoRole: UserInfoRole): Observable<boolean> {
    return this.httpClient.delete<boolean>('http://localhost:8080/userInfoRole/delete/23423', { body: userInfoRole })
    //.subscribe((e)=>{ });
  }

  search(userInfoRoleSearchDto: UserInfoRoleSearchDto): Observable<Array<UserInfoRole>> {
    return this.httpClient.post<Array<UserInfoRole>>('http://localhost:8080/userInfoRole/search', userInfoRoleSearchDto);
  }
}
