import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './posts/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts");
  }

  getPhotos(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/photos");
  }

  postPost(post: Post){
    return this.httpClient.post("https://jsonplaceholder.typicode.com/posts", post);
  }


}
