import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { CommentSearchDto } from "../dto/request/CommentSearchDto";

@Injectable({providedIn: 'root'})
export class CommentController {

  constructor(private httpClient: HttpClient,) {
  }

  save(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>('http://localhost:8080/comment/save', comment);
  }

  saveWithRoom(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>('http://localhost:8080/comment/save-with-room', comment);
  }

  update(comment: Comment): Observable<Comment> {
    return this.httpClient.put<Comment>('http://localhost:8080/comment/update', comment);
  }

  delete(comment: Comment): Observable<boolean> {
    //console.log(comment);
    return this.httpClient.delete<boolean>('http://localhost:8080/comment/delete', {body: comment})
    //.subscribe((e)=>{ });
  }

  search(commentSearchDto: CommentSearchDto): Observable<Array<Comment>> {
    return this.httpClient.post<Array<Comment>>('http://localhost:8080/comment/search', commentSearchDto);
  }
}
