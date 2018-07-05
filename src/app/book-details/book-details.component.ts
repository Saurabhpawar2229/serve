import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit 
{
  public info = [];
  constructor(private _booksservice:BooksService) 
  { 

  }

  ngOnInit()
   {
     this.info = this._booksservice.GetBookDetails();
   }

}
