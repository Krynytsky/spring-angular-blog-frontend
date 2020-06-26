import {Component, OnInit} from '@angular/core';
import {AddPostService} from '../add-post/add-post.service';
import {Observable} from 'rxjs';
import {PostPayload} from '../add-post/post-payload';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: Observable<Array<PostPayload>>;

  constructor(private postService: AddPostService) {
  }

  ngOnInit(): void {
    this.posts = this.postService.getAllPost();
  }
// todo
  // deletePost() {
  //   this.postService.deletePost();
  // }
}
