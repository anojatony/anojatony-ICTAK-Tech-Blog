import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

    newUser(student:any){
    return this.http.post("http://localhost:8000/signup",student)
    .subscribe(data=>{console.log(data)})

  }
  newtUser(trainer:any){
    return this.http.post("http://localhost:8000/trainersignup",trainer)
    .subscribe(data=>{console.log(data)})

  }

}
