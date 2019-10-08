import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private http: HttpClient) { }
  error_message='';
  courses = [];
  listCourse = function() {
    this.http.get("http://localhost:3000/coursedev/").subscribe(
      (result : any[]) => {
        this.courses = result;
        console.log(this.courses)
        this.error_message = ""
      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }

  ngOnInit() {
    this.listCourse();
  }
}
