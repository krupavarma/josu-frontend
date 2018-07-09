import { Register } from './../info';
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

@Injectable()
export class forgotPassword {
    // data:Object;
    errorMessage;
    constructor(private http: Http) {
    }
    private _postsURL = "http://localhost:9000/api/forgotPassword";
    forgotPassword(data:Object): Observable<Register[]> {
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