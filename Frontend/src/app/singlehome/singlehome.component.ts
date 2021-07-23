import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-singlehome',
  templateUrl: './singlehome.component.html',
  styleUrls: ['./singlehome.component.css']
})
export class SinglehomeComponent implements OnInit {

  hpost={
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

  let hpostid = localStorage.getItem("singlehblog");
  this.blogService.gethomeBlog(hpostid).subscribe((data)=>{
  this.hpost=JSON.parse(JSON.stringify(data));
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
