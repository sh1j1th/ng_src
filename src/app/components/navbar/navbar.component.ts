import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

/*
  email;
  password;
  errorMessage = ""
  */
  constructor(private http: HttpClient, private _router: Router,private _authService: AuthService) { }


  ngOnInit() {
  }
/*
  loginUser() {
    console.log("email: " + this.email);
    console.log("password: " + this.password);

    var body ="&email=" + this.email
      + "&password=" + this.password;

    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    this.http.post("http://localhost:3000/user/check", body,
      { headers: headers, responseType: 'text' }).subscribe(
        (result) => {
          console.log(result)
          //localStorage.setItem('qualification', 'MCA');
          //localStorage.setItem('amars_data', JSON.stringify({ name: 'R. Amaranathan', place: 'Valasai', mailid: 'amar@hotmail.com' }));
          if (result == 'Invalid User') {
            this.errorMessage = "Invalid User"
          } else {// we will get the JWT token from REST API / Server then we have to store in the Frontend
            localStorage.setItem('token', result);
            this._router.navigate(['login'])
          }
        },
        (error) => {
          this.errorMessage = "Error occured, check whether Backend is running!";
          console.log(error)
        }
      )
  }
  */

}
