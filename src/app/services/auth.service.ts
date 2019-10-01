import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  constructor(private _router: Router) { }

  loggedIn(){
    return !!localStorage.getItem('token')
  }  

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate([''])
  }
  
}
