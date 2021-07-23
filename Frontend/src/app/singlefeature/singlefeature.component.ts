import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-singlefeature',
  templateUrl: './singlefeature.component.html',
  styleUrls: ['./singlefeature.component.css']
})
export class SinglefeatureComponent implements OnInit {


  fpost={
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

    
  let fpostid = localStorage.getItem("singlefblog");
  this.blogService.getfeaturedBlog(fpostid).subscribe((data)=>{
    this.fpost=JSON.parse(JSON.stringify(data));
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
