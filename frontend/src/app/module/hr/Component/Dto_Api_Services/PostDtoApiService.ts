import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Dto/Post';
import { HttpClient } from '@angular/common/http';
import { PostSearchDto } from '../Dto/request/PostSearchDto';

@Injectable({
  providedIn: 'root',
})
export class PostDtoApiService {
  constructor(private httpClient: HttpClient) {}

  save(post: Post): Observable<Post> {
    return this.httpClient.post<Post>('http://localhost:8080/post/save', post);
  }

  update(post: Post): Observable<Post> {
    //console.log(id);
    return this.httpClient.put<Post>(
      'http://localhost:8080/post/update/' + post.id,
      post
    );
    console.log(post.id);
  }

  delete(post: Post):Observable<boolean> {
    console.log(post.id);
    return this.httpClient
      .delete<boolean>('http://localhost:8080/post/delete/' + post.id);
      //.subscribe((e)=>{ });
    console.log('successfully Deleted...');
  }

  search(postSearchDto: PostSearchDto): Observable<Array<Post>> {
    return this.httpClient.post<Array<Post>>(
      'http://localhost:8080/post/search',
      postSearchDto
    );
  }
}
