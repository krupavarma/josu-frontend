import { Register } from './../../info';
import { register } from './../../register.services';
import { navpills } from './../../../models/home';
import { approute } from './../../../app.router';

import { Router } from '@angular/router';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
import { Input, Output, EventEmitter } from '@angular/core';

import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-employerprofessional',
  templateUrl: './employerprofessional.component.html',
  styleUrls: ['./employerprofessional.component.scss'],
  providers: [register]
})
export class EmployerprofessionalComponent implements OnInit {
  PageName: String;
  responseData: any;
  data: any = {};
  @Input() inputedData: [{ positionFormControl: String }]

  employerForm = new FormGroup({

    position: new FormControl('', [
      Validators.required,

    ]),

    industry: new FormControl('', [
      Validators.required

    ]),
    companyName: new FormControl('', [
      Validators.required

    ]),
    companyWebsite: new FormControl('', [
      Validators.required

    ]),

  })
  get position() {
    return this.employerForm.get('position');
  }
  get industry() {
    return this.employerForm.get('industry');
  }
  get companyName() {
    return this.employerForm.get('companyName');
  }
  get companyWebsite() {
    return this.employerForm.get('companyWebsite');
  }

  congratulationsForm = new FormGroup({

    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(30),
      Validators.pattern(EMAIL_REGEX)]),

    passwordFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20)
    ])
  })
  get passwordFormControl() {
    return this.congratulationsForm.get('passwordFormControl');
  }
  get emailFormControl() {
    return this.congratulationsForm.get('emailFormControl');
  }
message:any;
  constructor(private routes: Router, private service: register ,public snackBar: MatSnackBar) { 
   this.message="Link Has Been Sent To Your Mail.." ;
  }
 openSnackBar() {
    this.snackBar.open(this.message,"check it",{duration:2000}
    );
  }

  employerdata: any;
  employerprofessional(): void {
    console.log(this.data);
    let registerDetails:any = {}
    registerDetails.info = this.data; 
    this.employerdata = this.service.submit(registerDetails);
    console.log(this.employerdata);
    // this.service.employerprofessional(this.data)
    //   .subscribe(result => {
    //     this.responseData = result
    //     console.log(this.responseData)
    //     console.log(this.responseData.userName);
    //   }
    //   )
  }
  gotoDashboard(congratulationsForm) {
    let data = congratulationsForm.value;
    this.routes.navigate(['/employer']);
    console.log(data);
  }

  LoadPage() {
    this.PageName = "congrats";
  }
  ngOnInit() {
  }

}
