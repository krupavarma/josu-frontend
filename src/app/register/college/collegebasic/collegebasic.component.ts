import { register } from './../../register.services';
import { Register } from './../../info';


import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-collegebasic',
  templateUrl: './collegebasic.component.html',
  styleUrls: ['./collegebasic.component.scss'],
  providers: [register]
})
export class CollegebasicComponent implements OnInit {
data:any={};
responseData:any;
  collegeForm = new FormGroup({

    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),

    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    primaryEmail: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(30),
      Validators.pattern(EMAIL_REGEX)]),
  })
  get firstName() {
    return this.collegeForm.get('firstName');
  }
  get lastName() {
    return this.collegeForm.get('lastName');
  }
  get userName() {
    return this.collegeForm.get('userName');
  }
  get primaryEmail() {
    return this.collegeForm.get('primaryEmail');
  }
 

collegebasic(): void {
    console.log(this.data);
    this.service.basicDetails(this.data);
  }
  constructor(private service: register) { }

  ngOnInit() {
  }

}
