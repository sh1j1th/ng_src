import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  role;
  firstName;
  lastName;
  email;
  password;
  status;
  message = "";
  constructor(private http: HttpClient, private _router : Router) { }

  ngOnInit() {
  }

  registerUser() {
    console.log("email: " + this.email);
    console.log("password: " + this.password);

    

    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    if (this.role == 'user') {

      var body = "firstName=" + this.firstName
      + "&lastName=" + this.lastName
      + "&email=" + this.email
      + "&password=" + this.password
      + "&status=" + "Active";

      this.http.post("http://localhost:3000/user/", body,
        { headers: headers, responseType: 'text' }).subscribe(
          (result) => {
            console.log(result)
            alert("Please login to continue")
            this._router.navigate(['/login'])
          },
          (error) => {
            console.log(error)
            this.message = "Error : Backend is running? or Registered already?";
          }
        )

    } else {

      var body = "firstName=" + this.firstName
      + "&lastName=" + this.lastName
      + "&email=" + this.email
      + "&password=" + this.password
      + "&yearsOfExperience=" + ''
      + "&linkedinUrl=" + ''
      + "&status=" + "Active";
      
      this.http.post("http://localhost:3000/mentor/", body,
        { headers: headers, responseType: 'text' }).subscribe(
          (result) => {
            console.log(result)
            //this.message = "Congratulations, You had successfully registered, please login to visit dashboard"
            alert("Please login to continue")
            this._router.navigate(['/mentorlogin'])
          },
          (error) => {
            console.log(error)
            this.message = "Error : Backend is running? or Registered already?";
          }
        )
    }


  }
}
