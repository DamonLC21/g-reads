import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

    authors:Object;
    constructor(private data:DataService) { }
  
    ngOnInit() {
      // this.data.getPosts().subscribe(
      //   data => this.books = data
      // )
      this.data.getAuthors()
      .then((response)=>{
        return response.json()})
      .then((data)=>this.authors = data.data)
      .then(console.log)
      document.body.classList.remove('bg-img');
    }
  }

