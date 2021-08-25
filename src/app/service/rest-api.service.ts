import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }
  public getH(category: string) {
    const path = `http://localhost:3000/api/post/${category}`;
    return this.http.get<Post[]>(path); //get
  }
  public getPostH(category: string, title: string) {
    const path = `http://localhost:3000/api/post/${category}/${title}`;
    return this.http.get<Post>(path); //get
  }

  public getPostAllByid(id: number) {
    const path = `http://localhost:3000/api/post/all/${id}`;
    return this.http.get<Post>(path); //get
  }



}
