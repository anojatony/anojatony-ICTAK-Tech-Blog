import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
  posts=[{
    id:'',
    title:'',
    author:'',
    introduction:'',
    content:'',
    category:'',
    image:''
  }]

  trendingposts=[{
    id:'',
    title:'',
    author:'',
    introduction:'',
    content:'',
    category:'',
    image:''
  }]
 
  featuredposts=[{
    id:'',
    title:'',
    author:'',
    introduction:'',
    content:'',
    category:'',
    image:''
  }]
 


  cats=["Cyber Security","Artificial Intelligence","FSD","IOT","Others"];

  
  constructor(private blogService:BlogService, private router:Router,public _auth:AuthService) { }

  ngOnInit(): void {
    this.blogService.getPosts().subscribe((data)=>{
    this.posts=JSON.parse(JSON.stringify(data));
  })

  this.blogService.gettrendingPosts().subscribe((data)=>{
  this.trendingposts=JSON.parse(JSON.stringify(data));
  })

  this.blogService.getfeaturedPosts().subscribe((data)=>{
  this.featuredposts=JSON.parse(JSON.stringify(data));
    })

  }

singleBlog(post:any){
  localStorage.setItem("singleblog", post._id.toString());
  this.router.navigate(['singleblog']);
}

singlefBlog(post:any){
  localStorage.setItem("singlefblog", post._id.toString());
  this.router.navigate(['singlefeature']);
}

singletBlog(post:any){
  localStorage.setItem("singletblog", post._id.toString());
  this.router.navigate(['singletrending']);
}

logoutUser()
  {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  localStorage.removeItem('trainer')
  this.router.navigate(['blog'])
  }

}
