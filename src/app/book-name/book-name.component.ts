import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-name',
  templateUrl: './book-name.component.html',
  styleUrls: ['./book-name.component.css']
})
export class BookNameComponent implements OnInit 
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
