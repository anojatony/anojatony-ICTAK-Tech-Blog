import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signuptrainer',
  templateUrl: './signuptrainer.component.html',
  styleUrls: ['./signuptrainer.component.css']
})
export class SignuptrainerComponent implements OnInit {

  constructor(private fb:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  registerForm = this.fb.group(
    {
      firstname:['',[Validators.required,Validators.pattern('^[a-zA-Z\s]+$')]],
      lastname:['',[Validators.required, Validators.pattern('^[a-zA-Z\s]+$')]],
      email:['', [Validators.required,Validators.pattern('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password:['',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
      phone:['',[Validators.required,Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$')]],
      company:['',Validators.required]
    }  
  )

 
  pwdmsg:any;
  color:any;

  

  validatePassword(){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])(?=.*\\W))|((?=.*[a-z])(?=.*[0-9])(?=.*\\W))|((?=.*[A-Z])(?=.*[a-z])(?=.*\\W))).*$", "g");
    var enoughRegex = new RegExp("(?=.{3,}).*", "g");

    if(false == enoughRegex.test(this.registerForm.value.password)){
      this.pwdmsg="Too short!!",
      this.color="text-danger"
    }
    else if (strongRegex.test(this.registerForm.value.password)){
      this.pwdmsg="Pefect!  Strong",
      this.color="text-success"
    }
    else if (mediumRegex.test(this.registerForm.value.password)){
      this.pwdmsg="Medium",
      this.color="text-warning"
    }
    
    else {
      this.pwdmsg="Weak",
      this.color="text-danger"
    }
  }


  signtUser(){
    this.userService.newtUser(this.registerForm.value)
    console.log("called")
    alert("Registered Successfully!");
    this.router.navigate(['login']);
  }




}
