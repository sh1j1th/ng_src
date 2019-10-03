import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.scss']
})
export class UsersCrudComponent implements OnInit {

  constructor(private http: HttpClient) { }
  error_message='';
  users = [];
  listUser = function() {
    this.http.get("http://localhost:3000/user/").subscribe(
      (result : any[]) => {
        this.users = result;
        console.log(this.users)
        this.error_message = ""
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  deleteUser = function(id) {
    console.log(id)
    this.http.delete("http://localhost:3000/user/"+id).subscribe(
      (result : any[]) => {
        this.users = result;
        console.log(this.users)
        this.error_message = ""
        
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  unBlockUser = function(id) {
    console.log(id)
    this.http.put("http://localhost:3000/user/unblock/"+id).subscribe(
      (result : any[]) => {
        this.users = result;
        console.log(this.users)
        this.error_message = ""
        
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  blockUser = function(id) {
    console.log(id)
    this.http.put("http://localhost:3000/user/block/"+id).subscribe(
      (result : any[]) => {
        this.users = result;
        console.log(this.users)
        this.error_message = ""
        
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  ngOnInit() {
    this.listUser();
    //this.blockUser();
    //this.deleteUser();
  }

}
 