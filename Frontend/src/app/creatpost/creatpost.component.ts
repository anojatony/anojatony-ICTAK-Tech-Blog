import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-creatpost',
  templateUrl: './creatpost.component.html',
  styleUrls: ['./creatpost.component.css']
})
export class CreatpostComponent implements OnInit {

  posts={
    id:'',
    title:'',
    author:'',
    introduction:'',
    content:'',
    category:'',
    image:''
  }
 
  cats=["Cyber Security","Artificial Intelligence","Full Stack Development","Data Science","Others"];


  constructor(private blogService:BlogService, private router:Router) { }

  ngOnInit(): void {
  }


  selectImage(event:any){
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.posts.image=file;
    }
     }

     selectCat(event:any){
     this.posts.category=event.target.value;
       }
   
     createpost(){
       const formData=new FormData();
       formData.append('image', this.posts.image)
       formData.append('title',this.posts.title)
       formData.append('author',this.posts.author)
       formData.append('introduction',this.posts.introduction)
       formData.append('content',this.posts.content)
       formData.append('category',this.posts.category)
       this.blogService.newPost(formData);
       console.log("Called");
       alert("Thank you, your post be will be uploaded soon!!!");
       this.router.navigate(['/blog']);
     }

}
