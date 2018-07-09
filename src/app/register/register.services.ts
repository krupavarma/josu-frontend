import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Subject } from 'rxjs';
import "rxjs/Rx";

import { Register } from './../register/info';

@Injectable()
export class register {
    private _postsURL = "http://localhost:4000/api/register";
    private basic: Register;
    private personal: Register;
 
    constructor(private http: Http) {
        this.basic = new Register();
        this.personal = new Register();
    }
    basicDetails(data: Register) {

        this.basic = data;    
        console.log(this.basicDetails);
        // sessionStorage.basicDetails=  JSON.stringify(this.saveDetails1);
        
        
    }
    personalDetails(data: Register) {
        this.personal = data;
        console.log(this.basic);
        // sessionStorage.personalDetails=JSON.stringify(this.saveDetails2);
    }
    submit(data: any) {
        // var bas=sessionStorage.basicDetails;
        // var per= sessionStorage.personalDetails;
        Object.assign(data.info, this.basic, this.personal,data.professional);
        console.log(data);
        return this.http
            .post(this._postsURL, data)
            .map((response: Response) => {
                console.log(response)
                // let responseData = response.body;
                return <Register[]>response.json();
            })
            .catch(this.handleError);
    }

    
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}