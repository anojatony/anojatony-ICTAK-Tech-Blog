import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-singletrending',
  templateUrl: './singletrending.component.html',
  styleUrls: ['./singletrending.component.css']
})
export class SingletrendingComponent implements OnInit {
  tpost={
    id:'',
    title:'',
    author:'',
    introduction:'',
    content:'',
    category:'',
    image:''
  }
  constructor(private blogService:BlogService,private router:Router,public _auth:AuthService) { }

  ngOnInit(): void {

    
let tpostid = localStorage.getItem("singletblog");
this.blogService.gettrendingBlog(tpostid).subscribe((data)=>{
  this.tpost=JSON.parse(JSON.stringify(data));
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
