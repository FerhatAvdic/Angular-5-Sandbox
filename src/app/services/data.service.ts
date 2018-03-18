import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http:HttpClient) {
    console.log("data service connected");
   }

   getPosts(){
     return this.http.get('https://jsonplaceholder.typicode.com/posts');
   }
}
