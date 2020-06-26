import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AddPostService} from '../add-post/add-post.service';
import {PostPayload} from '../add-post/post-payload';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  permaLink: number;
  post: PostPayload;

  constructor(private router: ActivatedRoute, private postService: AddPostService) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.permaLink = params.id;
    });
    this.postService.getPost(this.permaLink).subscribe((data: PostPayload) => {
      this.post = data;
    }, (error: any) => {
      alert('Failure Responce');
    });

  }
}
