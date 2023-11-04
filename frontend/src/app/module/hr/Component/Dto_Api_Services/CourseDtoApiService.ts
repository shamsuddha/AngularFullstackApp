import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "../Dto/Course";
import { CourseSearchDto } from "../Dto/request/CourseSearchDto";

@Injectable({
  providedIn: 'root'
})
export class CourseDtoApiService {

  constructor(private httpClient: HttpClient) {
  }

  save(course: Course): Observable<Course> {
    return this.httpClient.post<Course>("http://localhost:8080/course/save", course);
  }

  update(course: Course): Observable<Course> {
    return this.httpClient.put<Course>('http://localhost:8080/course/update/'
      + course.id, course);
  }

  delete(post: Course) {
    this.httpClient.delete<Course>('http://localhost:8080/course/delete/' + post.id).subscribe();
    console.log("successfully Deleted...");
  }

  search(courseSearchDto: CourseSearchDto): Observable<Array<Course>> {
    return this.httpClient.post<Array<Course>>("http://localhost:8080/course/search", courseSearchDto);
  }
}
