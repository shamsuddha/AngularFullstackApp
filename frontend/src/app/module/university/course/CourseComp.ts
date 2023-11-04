import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'CourseComp',
  templateUrl: './CourseComp.html',
  styleUrls: ['./CourseComp.scss'],
  //standalone: true
})
export class CourseComp implements OnInit {

  courseDtoFg = new FormGroup({
    courseName: new FormControl<string | null>(null, [
      Validators.required,
      Validators.maxLength(35),
      Validators.minLength(3),
    ]),
    courseCode: new FormControl<string | null>(null, [
      Validators.required,
      Validators.maxLength(35),
      Validators.minLength(3),
    ]),
    description: new FormControl<string | null>(null, [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3),
    ]),

     });

  constructor(
   // public userDtoApiService: UserDtoApiService
  ) {}

  ngOnInit() {
   // this.searchUser()
  }

  


}
