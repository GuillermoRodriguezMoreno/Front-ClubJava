import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//ENDPOINTS URL
const POSTSURL="https://restapi-clubjava.onrender.com/v1/api/posts";
const COMMENTSURL="https://restapi-clubjava.onrender.com/v1/api/comments";

const HTTPOPTIONS = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getPosts():Observable<Object>{
    return this.http.get(POSTSURL);
  }

  getPost(id:any):Observable<Object>{
    return this.http.get(POSTSURL+"/"+id);
  }

  getPostComments(id:any):Observable<Object>{
    return this.http.get(COMMENTSURL+"?postId="+id);
  }
}
