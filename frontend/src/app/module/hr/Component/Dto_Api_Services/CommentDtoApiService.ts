import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../Dto/Comment';
import { HttpClient } from '@angular/common/http';
import { CommentSearchDto } from '../Dto/request/CommentSearchDto';

@Injectable({
  providedIn: 'root',
})
export class CommentDtoApiService {
  constructor(private httpClient: HttpClient) {}

  save(comment: Comment): Observable<Comment> {
    return this.httpClient.post<Comment>('http://localhost:8080/comment/save', comment);
  }

  update(comment: Comment): Observable<Comment> {
    //console.log(id);
    return this.httpClient.put<Comment>(
      'http://localhost:8080/comment/update/' + comment.id,
      comment
    );
    console.log(comment.id);
  }

  delete(comment: Comment):Observable<boolean> {
    console.log(comment.id);
    return this.httpClient
      .delete<boolean>('http://localhost:8080/comment/delete/' + comment.id);
      //.subscribe((e)=>{ });
    console.log('successfully Deleted...');
  }

  search(leaveSearchDto: CommentSearchDto): Observable<Array<Comment>> {
    return this.httpClient.post<Array<Comment>>(
      'http://localhost:8080/comment/search',
      leaveSearchDto
    );
  }
}
