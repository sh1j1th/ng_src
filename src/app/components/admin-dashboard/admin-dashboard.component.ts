import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private http: HttpClient) { }
  error_message = '';
  users = [];
  listUser = function () {
    this.http.get("http://localhost:3000/user/table").subscribe(
      (result: any[]) => {
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




  ngOnInit() {
   // this.listUser();

  }

}