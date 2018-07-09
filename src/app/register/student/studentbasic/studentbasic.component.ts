import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

import { register } from './../../register.services';
import { Register } from './../../info';
@Component({
  selector: 'app-studentbasic',
  templateUrl: './studentbasic.component.html',
  styleUrls: ['./studentbasic.component.scss'],
  providers: [register]
})
export class StudentbasicComponent implements OnInit {

  data: any = {};
  responseData: any;


  studentForm = new FormGroup({

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
    return this.studentForm.get('firstName');
  }
  get lastName() {
    return this.studentForm.get('lastName');
  }
  get userName() {
    return this.studentForm.get('userName');
  }
  get primaryEmail() {
    return this.studentForm.get('primaryEmail');
  }

  //   onSubmit(studentForm) {
  //   let data = studentForm.value;

  //   // this.service.postRegisterData(data).subscribe(response => {
  //   //   console.log(response);
  //   //   let m = response.json();
  //   //   if (m.status == true) {
  //   //     this.result="registration successful";
  //   //     this.routes.navigate(['/login']);
  //   //   }


  //   // })
  //   console.log(data);
  // }

  studentbasic(): void {
    console.log(this.data);
    this.service.basicDetails(this.data);
  }
  constructor(private service: register) { }

  ngOnInit() {
  }

}
