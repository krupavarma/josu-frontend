import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';

import { register } from './../../register.services';
import { Register } from './../../info';
@Component({
  selector: 'app-studentpersonal',
  templateUrl: './studentpersonal.component.html',
  styleUrls: ['./studentpersonal.component.scss'],
  providers: [register]
})
export class StudentpersonalComponent implements OnInit {

  data: any = {};
  responseData: any;

  studentForm = new FormGroup({

    mobile: new FormControl('', [
      Validators.required,
      Validators.maxLength(14),
    ]),

    dob: new FormControl('', [
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
    return this.studentForm.get('mobile');
  }
  get dob() {
    return this.studentForm.get('dob');
  }
  get address() {
    return this.studentForm.get('address');
  }
  get zipcode() {
    return this.studentForm.get('zipcode');
  }

  get city() {
    return this.studentForm.get('city');
  }
  get state() {
    return this.studentForm.get('state');
  }
  get country() {
    return this.studentForm.get('country');
  }

  studentpersonal(): void {
    console.log(this.data);
    this.service.personalDetails(this.data);
  }
  constructor(private service: register) { }


  ngOnInit() {
  }

}
