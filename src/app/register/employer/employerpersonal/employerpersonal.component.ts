import { Register } from './../../info';
import { register } from './../../register.services';

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
@Component({
  selector: 'app-employerpersonal',
  templateUrl: './employerpersonal.component.html',
  styleUrls: ['./employerpersonal.component.scss'],
  providers:[register]
})
export class EmployerpersonalComponent implements OnInit {
responseData:any;
data:any={};
  employerForm = new FormGroup({

    mobile: new FormControl('', [
      Validators.required,
      Validators.maxLength(14),
    ]),

    fax: new FormControl('', [
      Validators.required,

    ]),
    address: new FormControl('', [
      Validators.required,

    ]),
    zipcode: new FormControl('', [
      Validators.required,
      Validators.minLength(6)

    ]),

    city: new FormControl('', [
      Validators.required

    ]),
    state: new FormControl('', [
      Validators.required

    ]),
    country: new FormControl('', [
      Validators.required

    ]),

  })
  get mobile() {
    return this.employerForm.get('mobile');
  }
  get fax() {
    return this.employerForm.get('fax');
  }
  get address() {
    return this.employerForm.get('address');
  }
  get zipcode() {
    return this.employerForm.get('zipcode');
  }

  get city() {
    return this.employerForm.get('city');
  }
  get state() {
    return this.employerForm.get('state');
  }
  get country() {
    return this.employerForm.get('country');
  }




  constructor(private service: register) { }
  employerpersonal(): void {
      console.log(this.data);
     this.service.personalDetails(this.data);
   
  }
  ngOnInit() {
  }

}
