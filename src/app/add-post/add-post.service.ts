import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostPayload} from './post-payload';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddPostService {
  // aws
  private url = 'http://18.217.227.164:8080/api/';
  // localhost
  // private  url = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) {
  }

  addPost(postPayload: PostPayload) {
    return this.httpClient.post(this.url + 'posts/', postPayload);
  }

  getAllPost(): Observable<Array<PostPayload>> {
    return this.httpClient.get<Array<PostPayload>>(this.url + 'posts/all/');
  }

  getPost(permaLink: number): Observable<PostPayload>{
    return this.httpClient.get<PostPayload>(this.url + 'posts/get/' + permaLink);
  }
// todo
  // deletePost() {
  //  return  this.httpClient.delete<PostPayload>(this.url + 'post/delete'+pe)
  // }
}
