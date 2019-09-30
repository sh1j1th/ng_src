import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  message = "";
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  registerUser(){
    console.log("email: " + this.email);
    console.log("password: " + this.password);

    var body ="role=" + this.role
      + "&firstName=" + this.firstName
      + "&lastName=" + this.lastName
      + "&email=" + this.email
      + "&password=" + this.password;
    
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    this.http.post("http://localhost:3000/user/", body, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Congratulations, You had successfully registered"
      },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running? or Registered already?";
      }
    )
  }
}
 