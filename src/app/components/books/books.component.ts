import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  books:Object;
  constructor(private data:DataService) { }

  ngOnInit() {
    // this.data.getPosts().subscribe(
    //   data => this.books = data
    // )
    this.data.getPosts()
    .then((response)=>{
      return response.json()})
    .then((data)=>this.books = data.data)
    .then(console.log)

    document.body.classList.remove('bg-img');

  }

}
