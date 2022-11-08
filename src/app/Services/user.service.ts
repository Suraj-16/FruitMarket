import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { loginDetail } from '../Models/loginDetail';
import { userDetail } from '../Models/userDetail';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "https://localhost:44330/api/user";

  constructor(private http : HttpClient, private router : Router) { }

  addUser(userdetails : userDetail) : Observable <any>{
    return this.http.post<userDetail>(this.baseUrl, userdetails);
  }

  // loginUser(logindetails : loginDetail) : Observable <any>{
  //   return this.http.get<loginDetail>(this.baseUrl, logindetails);
  // }

  loginUser(logindet : loginDetail) : Observable <any>{
    return this.http.post<loginDetail>(this.baseUrl + "/login", logindet);
  }
}
