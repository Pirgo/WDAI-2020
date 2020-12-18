import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts: any;
  addedPost : Object;

  constructor(private apiService: ApiService) { }



  ngOnInit(): void {
    this.apiService.getPosts().subscribe(data => {
      this.posts = data;
    })

    let post = new Post()
    post.userId = 5
    post.body = "Losdafbviocbngoifnon"
    post.title = "Dodany post"

    this.apiService.postPost(post).subscribe(data =>{
      this.addedPost = data
      this.posts.push(this.addedPost)
    })

  }

}
