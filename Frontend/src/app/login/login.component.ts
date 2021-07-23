import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    email:'',
    password:''
  }

  constructor(private _auth:AuthService, private _router: Router,private flashMessage: FlashMessagesService) { }

  ngOnInit(): void {
  }

  loginUser(){
    this._auth.loginUser(this.user)
.subscribe(
  res => {
    
    if(res.token){
    localStorage.setItem('token', res.token)
    this._router.navigate(['/blog'])
    }
    else if(res.user){
      localStorage.setItem('user', res.user)
      this._router.navigate(['/blog'])
    }
    else if(res.trainer){
      localStorage.setItem('trainer', res.trainer)
      this._router.navigate(['/blog'])
    }
  },
  err => {

    console.log(err);
    alert("hi")
    this._router.navigate(['login'])
  
    
  }
) 
  }

  

}
