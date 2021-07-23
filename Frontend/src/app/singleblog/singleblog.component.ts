import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-singleblog',
  templateUrl: './singleblog.component.html',
  styleUrls: ['./singleblog.component.css']
})
export class SingleblogComponent implements OnInit {

post={
    id:'',
    title:'',
    author:'',
    introduction:'',
    content:'',
    category:'',
    image:''
  }

  

  
  constructor(private blogService:BlogService, private router:Router,public _auth:AuthService) { }

  ngOnInit(): void {

    let postid = localStorage.getItem("singleblog");
    this.blogService.getBlog(postid).subscribe((data)=>{
      this.post=JSON.parse(JSON.stringify(data));
  })



  }

 

  logoutUser()
  {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  localStorage.removeItem('trainer')
  this.router.navigate(['blog'])
  }
}
