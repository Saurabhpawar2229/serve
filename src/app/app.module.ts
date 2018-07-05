import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookNameComponent } from './book-name/book-name.component';
import { BookPriceComponent } from './book-price/book-price.component';
import  { BooksService } from './books.service';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    BookNameComponent,
    BookPriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
