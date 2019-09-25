import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loginUserData = {}
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(){
    console.log(this.loginUserData)
    /*
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
      */
  }

}
