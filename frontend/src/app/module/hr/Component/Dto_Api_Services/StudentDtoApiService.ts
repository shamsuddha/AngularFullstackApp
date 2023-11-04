import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Dto/Student';
import { HttpClient } from '@angular/common/http';
import { StudentSearchDto } from '../Dto/request/StudentSearchDto';

@Injectable({
  providedIn: 'root',
})
export class StudentDtoApiService {
  constructor(private httpClient: HttpClient) {}

  save(student: Student): Observable<Student> {
    return this.httpClient.post<Student>('http://localhost:8080/student/save', student);
  }

  update(student: Student): Observable<Student> {
    //console.log(id);
    return this.httpClient.put<Student>(
      'http://localhost:8080/student/update/' + student.id,
      student
    );
    console.log(student.id);
  }

  delete(student: Student):Observable<boolean> {
    console.log(student.id);
    return this.httpClient
      .delete<boolean>('http://localhost:8080/student/delete/' + student.id);
      //.subscribe((e)=>{ });
    console.log('successfully Deleted...');
  }

  search(studentSearchDto: StudentSearchDto): Observable<Array<Student>> {
    return this.httpClient.post<Array<Student>>(
      'http://localhost:8080/student/search',
      studentSearchDto
    );
  }
}
