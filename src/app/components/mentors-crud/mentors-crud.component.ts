import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mentors-crud',
  templateUrl: './mentors-crud.component.html',
  styleUrls: ['./mentors-crud.component.scss']
})
export class MentorsCrudComponent implements OnInit {

  constructor(private http: HttpClient) { }
  error_message='';
  mentors = [];
  listMentor = function() {
    this.http.get("http://localhost:3000/mentor/").subscribe(
      (result : any[]) => {
        this.mentors = result;
        console.log(this.mentors)
        this.error_message = ""
      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }

  deleteMentor = function(id) {
    console.log(id)
    this.http.delete("http://localhost:3000/mentor/"+id).subscribe(
      (result : any[]) => {
        this.Mentors = result;
        console.log(this.Mentors)
        this.error_message = ""
        
      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }

  unBlockMentor = function(id) {
    console.log(id)
    this.http.put("http://localhost:3000/mentor/unblock/"+id).subscribe(
      (result : any[]) => {
        this.Mentors = result;
        console.log(this.Mentors)
        this.error_message = ""
        
      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }

  blockMentor = function(id) {
    console.log(id)
    this.http.put("http://localhost:3000/mentor/block/"+id).subscribe(
      (result : any[]) => {
        this.Mentors = result;
        console.log(this.Mentors)
        this.error_message = ""
        
      },
      (error) => {
        alert("Error occured, check whether Backend is running!");
        console.log(error)
      }
    )
  }

  ngOnInit() {
    this.listMentor();
    //this.blockMentor();
    //this.deleteMentor();
  }


}
