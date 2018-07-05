import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-price',
  templateUrl: './book-price.component.html',
  styleUrls: ['./book-price.component.css']
})
export class BookPriceComponent implements OnInit 
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
