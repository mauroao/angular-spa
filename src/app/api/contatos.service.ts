import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { ConfigService } from '../config/config.service';

@Injectable()
export class ContatosService {

  constructor(private http: HttpClient, private conf: ConfigService) { }

  getContatos(currentPage = 1, findName = '') {

    const url = `${this.conf.apiBaseUrl}/contatos?pagenumber=${currentPage}&limit=${this.conf.pageSize}&findname=${findName}`;		
    
    return this.http
      .get(url)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `message was: ${error.message}`);
    }
    
    return new ErrorObservable('Something bad happened; please try again later.'); 
  }; 

}
