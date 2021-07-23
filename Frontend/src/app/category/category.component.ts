import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  posts=[{
    id:'',
    title:'',
    author:'',
    introduction:'',
    content:'',
    category:'',
    image:''
  }]

  cat:any;

  // cats=["Cyber Security","Artificial Intelligence","Full Stack Development","IOT","Others"];


  constructor(private blogService:BlogService, private _router: Router,private router: ActivatedRoute,public _auth:AuthService) { }

  ngOnInit(): void {
    
    this.router.params.subscribe(params => {
      this.cat=params.cat;
      console.log(this.cat)  
      this.blogService.searchCategory(this.cat).subscribe((data)=>{
        this.posts=JSON.parse(JSON.stringify(data));
      })
    });


  }

  singletcatBlog(post:any){
    localStorage.setItem("singleblog", post._id.toString());
  this._router.navigate(['singleblog']);
  }

  logoutUser()
  {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  localStorage.removeItem('trainer')
  this._router.navigate(['blog'])
  }
   

}
