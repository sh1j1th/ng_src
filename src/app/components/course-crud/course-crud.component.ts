import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-crud',
  templateUrl: './course-crud.component.html',
  styleUrls: ['./course-crud.component.scss']
})
export class CourseCrudComponent implements OnInit {

  constructor(private http: HttpClient) { }
  error_message = '';
  
  courseLists = []
  listCourse = function () {
    this.http.get("http://localhost:3000/courseList/").subscribe(
      (result: any[]) => {
        this.courseLists = result;
        console.log(this.courseLists)
        this.error_message = ""
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  ngOnInit() {
    this.listCourse();
  }

}
