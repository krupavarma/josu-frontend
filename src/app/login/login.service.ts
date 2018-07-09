import { Register } from './../register/info';
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class login {
    constructor(private http: Http) {
    }
    private _postsURL = "http://localhost:4000/api/login";
    login(data:Object): Observable<Register[]> {
        return this.http
            .post(this._postsURL, data)
            .map((response: Response) => {
                console.log(response)
                return <Register[]>response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}