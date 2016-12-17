import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Site } from './site';

@Injectable()
export class SitesService {
  apiUrl: string;
  subjects: Observable<Site>[];

  constructor(private _http: Http) { }

  getSites() {
    this.apiUrl = "http://localhost:12304/api/sites";
    return this._http.get(this.apiUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(err: any) {
    console.log('sever error:', err);  // debug
    if (err instanceof Response) {
      return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
  }
}
