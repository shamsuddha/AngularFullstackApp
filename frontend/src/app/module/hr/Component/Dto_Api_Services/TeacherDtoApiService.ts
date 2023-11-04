import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../Dto/Teacher';
import { HttpClient } from '@angular/common/http';
import { TeacherSearchDto } from '../Dto/request/TeacherSearchDto';

@Injectable({
  providedIn: 'root',
})
export class TeacherDtoApiService {
  constructor(private httpClient: HttpClient) {}

  save(teacher: Teacher): Observable<Teacher> {
    return this.httpClient.post<Teacher>('http://localhost:8080/teacher/save', teacher);
  }

  update(teacher: Teacher): Observable<Teacher> {
    //console.log(id);
    return this.httpClient.put<Teacher>(
      'http://localhost:8080/teacher/update/' + teacher.id,
      teacher
    );
    console.log(teacher.id);
  }

  delete(teacher: Teacher):Observable<boolean> {
    console.log(teacher.id);
    return this.httpClient
      .delete<boolean>('http://localhost:8080/teacher/delete/' + teacher.id);
      //.subscribe((e)=>{ });
    console.log('successfully Deleted...');
  }

  search(teacherSearchDto: TeacherSearchDto): Observable<Array<Teacher>> {
    return this.httpClient.post<Array<Teacher>>(
      'http://localhost:8080/teacher/search',
      teacherSearchDto
    );
  }
}
