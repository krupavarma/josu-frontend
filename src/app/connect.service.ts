import { Register } from './register/info';
import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
@Injectable()
export class connect {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) {
    }

}