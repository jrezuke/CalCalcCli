import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Subject } from './subject';

@Injectable()
export class SubjectsService {
  apiUrl: string;
  subjects: Observable<Subject>[];

  constructor(private _http: Http) { }

  getSubjects() {
    this.apiUrl = "http://localhost:12304/api/subjects";
    return this._http.get(this.apiUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(err: any) {
    console.log('sever error:', err);  // debug
    if (err instanceof Response) {
      //return Observable.throw(err.json().error || 'backend server error');
      // if you're using lite-server, use the following line
      // instead of the line above:
      return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
  }
}
