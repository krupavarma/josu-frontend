import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
import { approute } from './../../../app.router';

import { Router } from '@angular/router';

import { register } from './../../register.services';
import { Register } from './../../info';
@Component({
  selector: 'app-studentprofessional',
  templateUrl: './studentprofessional.component.html',
  styleUrls: ['./studentprofessional.component.scss'],
  providers: [register]
})
export class StudentprofessionalComponent implements OnInit {

  data: any = {};
  responseData: any;


  studentForm = new FormGroup({

    collegeName: new FormControl('', [
      Validators.required

    ]),
    address: new FormControl('', [
      Validators.required,

    ]),

    primaryEmail: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)

    ])



  })
  get collegeName() {
    return this.studentForm.get('collegeName');
  }
  get address() {
    return this.studentForm.get('address');
  }
  get primaryEmail() {
    return this.studentForm.get('primaryEmail');
  }

 studentprofessional(): void {
    console.log(this.data);
    this.service.submit(this.data);
  }

  constructor(private routes: Router, private service: register) { }

  ngOnInit() {
  }

}
