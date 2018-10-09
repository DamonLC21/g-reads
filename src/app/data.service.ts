import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getPosts(){
    // return this.http.get('https://g-reads-database.herokuapp.com/')
    return fetch('https://g-reads-database.herokuapp.com/')
  }

  getAuthors(){
    return fetch('https://g-reads-database.herokuapp.com/authors')
  }
}