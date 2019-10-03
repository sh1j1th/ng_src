import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  username;
  password;
  errorMessage = ""
  constructor(private http: HttpClient, private _router : Router) { }

  ngOnInit() {
  }

  loginUser() {
    console.log("username: " + this.username);
    console.log("password: " + this.password);

    var body ="username=" + this.username
      + "&password=" + this.password;

    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    
    this.http.post("http://localhost:3000/admin/check", body,
      { headers: headers, responseType: 'text' }).subscribe(
        (result) => {
          console.log(result)
          //localStorage.setItem('qualification', 'MCA');
          //localStorage.setItem('amars_data', JSON.stringify({ name: 'R. Amaranathan', place: 'Valasai', mailid: 'amar@hotmail.com' }));
          if (result == 'Invalid Credentials') {
            alert("Invalid Credentials")
          } else {// we will get the JWT token from REST API / Server then we have to store in the Frontend
            localStorage.setItem('token', result);
            alert("Login Successfull")
            this._router.navigate(['admindashboard'])
          }
        },
        (error) => {
          this.errorMessage = "Error occured, check whether Backend is running!";
          console.log(error)
        }
      )
  }
  


}
 