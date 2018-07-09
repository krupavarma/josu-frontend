import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
import { connect } from './../../../connect.service';
import { approute } from './../../../app.router';

import { Router } from '@angular/router';
import { register } from './../../register.services';
import { Register } from './../../info';

@Component({
  selector: 'app-collegeprofessional',
  templateUrl: './collegeprofessional.component.html',
  styleUrls: ['./collegeprofessional.component.scss'],
  providers: [register]
})
export class CollegeprofessionalComponent implements OnInit {
  PageName: String;
  data: any = {};
  responseData: any;

  collegeForm = new FormGroup({

    collegeName: new FormControl('', [
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

    mobile: new FormControl('', [
      Validators.required,
      Validators.maxLength(14),
    ]),

    landline: new FormControl('', [
      Validators.required,

    ])

  })

  get collegeName() {
    return this.collegeForm.get('collegeName');
  }
  get address() {
    return this.collegeForm.get('address');
  }
  get zipcode() {
    return this.collegeForm.get('zipcode');
  }

  get city() {
    return this.collegeForm.get('city');
  }
  get state() {
    return this.collegeForm.get('state');
  }
  get country() {
    return this.collegeForm.get('country');
  }
  get mobile() {
    return this.collegeForm.get('mobile');
  }
  get landline() {
    return this.collegeForm.get('landline');
  }

collegeprofessional(): void {
    console.log(this.data);
    this.service.submit(this.data);
  }


  LoadPage() {
    this.PageName = "congrats";
  }
  constructor(private service: register, private routes: Router) { }

  ngOnInit() {
  }

}
