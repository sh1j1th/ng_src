import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email;
  password;
  errorMessage = ""
  constructor(private http: HttpClient, private _router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    //console.log("email: " + this.email);
    //console.log("password: " + this.password);

    var body = "email=" + this.email
      + "&password=" + this.password;

    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    this.http.post("http://localhost:3000/user/check", body,
      { headers: headers, responseType: 'text' }).subscribe(
        (result) => {
          //localStorage.setItem('qualification', 'MCA');
          //localStorage.setItem('amars_data', JSON.stringify({ name: 'R. Amaranathan', place: 'Valasai', mailid: 'amar@hotmail.com' }));
          if (result == 'Invalid Credentials') {
            alert("Invalid Credentials")
          } else if (result == 'User blocked') {// we will get the JWT token from REST API / Server then we have to store in the Frontend
            alert("Your credentials have been blocked, please contact Admin")

          }
          else {
            localStorage.setItem('token', result);
            alert("Login Successfull")
            this._router.navigate(['userdashboard'])

          }
        },
        (error) => {
          this.errorMessage = "Error occured, check whether Backend is running!";
          console.log(error)
        }
      )
  }


}
