import { Component, OnInit } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';
import { Alert } from '../../../node_modules/@types/selenium-webdriver';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  
  ngOnInit() {
    this.http.get(this.url)
    .subscribe(response =>{
      this.posts = response.json();
    });
  }
  posts: any[];
  private url = 'https://jsonplaceholder.typicode.com/posts/';
  
  constructor(private http: Http) { 
  }

  createPost(input : HTMLInputElement){
    let post = {title: input.value }
    input.value='';
    this.http.post(this.url,JSON.stringify(post))
      .subscribe(
        response =>{
          post['id'] = response.json().id;
          this.posts.splice(0,0,post);
      });
  }

  updatePost(post){
    this.http.patch(this.url+'/'+post.id,JSON.stringify({ title: "TITLE EDITED BY ALI"}))
    .subscribe(response => {
      console.log(response);
    });

  }

}
