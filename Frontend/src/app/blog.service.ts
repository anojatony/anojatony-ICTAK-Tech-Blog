import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get("http://localhost:8000/posts")
  }

  searchCategory(cat:any){
    return this.http.get("http://localhost:8000/category/"+cat);
  }

  getBlog(id:any){
    return this.http.get("http://localhost:8000/blog/"+id);
  }

  newPost(post:any){
    return this.http.post("http://localhost:8000/createblog", post)
    .subscribe(data=>{console.log(data)})
  }

  getfeaturedPosts(){
    return this.http.get("http://localhost:8000/featuredposts")
  }

  getfeaturedBlog(id:any){
    return this.http.get("http://localhost:8000/featuredblog/"+id);
  }

  gettrendingPosts(){
    return this.http.get("http://localhost:8000/trendingposts")
  }

  gettrendingBlog(id:any){
    return this.http.get("http://localhost:8000/trendingblog/"+id);
  }

  gethomePosts(){
    return this.http.get("http://localhost:8000/homeposts")
  }

  gethomeBlog(id:any){
    return this.http.get("http://localhost:8000/homeblog/"+id);
  }



}


