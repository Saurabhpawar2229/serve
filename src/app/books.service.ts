import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  GetBookDetails()
  {
    return[
          {"Name":"C","Price":1000,"Author":"Ayaj Mittal","Pages":500},
          {"Name":"C++","Price":2000,"Author":"Hortsman","Pages":600},
          {"Name":"DS","Price":3000,"Author":"Kurumanchi","Pages":700},

          ];

  }
}
