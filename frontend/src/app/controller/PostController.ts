import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { PostSearchDto } from "../dto/request/PostSearchDto";
import { Post } from "../entity/Post";
@Injectable({providedIn: 'root'})
export class PostController {

  constructor(private httpClient: HttpClient,) {
  }

  save(post: Post): Observable<Post> {   
    return this.httpClient.post<Post>('http://localhost:8080/post/save', post);
  }

  // saveWithRoom(post: Post): Observable<Post> {
  //   return this.httpClient.post<Post>('http://localhost:8080/post/save-with-room', post);
  // }

  update(post: Post): Observable<Post> {
    return this.httpClient.put<Post>('http://localhost:8080/post/update', post);
  }

  delete(post: Post): Observable<boolean> {
    //console.log(post);
    return this.httpClient.delete<boolean>('http://localhost:8080/post/delete', {body: post})
    //.subscribe((e)=>{ });
  }

  search(postSearchDto: PostSearchDto): Observable<Array<Post>> {
    return this.httpClient.post<Array<Post>>('http://localhost:8080/post/search', postSearchDto);
  }
}
