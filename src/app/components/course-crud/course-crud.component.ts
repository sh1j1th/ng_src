import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-course-crud',
  templateUrl: './course-crud.component.html',
  styleUrls: ['./course-crud.component.scss']
})
export class CourseCrudComponent implements OnInit {

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.listCourse();
  }
  courseTitle;
  courseDescription;
  commission;
  message;

  error_message = '';

  course_lists = []
  listCourse = function () {
    this.http.get("http://localhost:3000/courseList/").subscribe(
      (result: any[]) => {
        this.course_lists = result;
        console.log(this.course_lists)
        this.error_message = ""
      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }

  removeCourse = function(id) {
    this.http.delete("http://localhost:3000/courseList/"+id).subscribe(
      (result : any[]) => {
        this.users = result;
        console.log(this.users)
        this.error_message = ""
        
      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }

   addCourse = function() {

    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    var body = "courseTitle=" + this.courseTitle
      + "&courseDescription=" + this.courseDescription
      + "&commission=" + this.commission;
      console.log(body)
      
      this.http.post("http://localhost:3000/courseList/", body,
        { headers: headers, responseType: 'text' }).subscribe(
          (result) => {
            console.log(result)
          },
          (error) => {
            console.log(error)
            alert("Error occured, check whether Backend is running!");
          }
        )
    }

  
}
