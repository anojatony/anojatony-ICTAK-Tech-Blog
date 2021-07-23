import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts=[{
    id:'',
    title:'',
    author:'',
    introduction:'',
    content:'',
    category:'',
    image:''
  }]

  constructor(private blogService:BlogService, private router:Router) { }

  ngOnInit(): void {

    this.blogService.gethomePosts().subscribe((data)=>{
      this.posts=JSON.parse(JSON.stringify(data));
    })
  }

  singleBlog(post:any){
    localStorage.setItem("singlehblog", post._id.toString());
    this.router.navigate(['singlehome']);
  }

}
