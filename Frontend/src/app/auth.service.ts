import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  loginUser(user:any){
    return this.http.post<any>("http://localhost:8000/login",user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  loggeduserIn(){
    return !!localStorage.getItem('user')
  }
  loggedtrainerIn(){
    return !!localStorage.getItem('trainer')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }


}
