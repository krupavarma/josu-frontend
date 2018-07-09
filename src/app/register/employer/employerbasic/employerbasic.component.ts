import { Register } from './../../info';
import { register } from './../../register.services';

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-employerbasic',
  templateUrl: './employerbasic.component.html',
  styleUrls: ['./employerbasic.component.scss'],
  providers:[register]
})
export class EmployerbasicComponent implements OnInit {
  @Input() inputedData: [{ firstNameFormControl: String }]
  data: any = {};
  responseData: any;
  employerForm = new FormGroup({

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
    return this.employerForm.get('firstName');
  }
  get lastName() {
    return this.employerForm.get('lastName');
  }
  get userName() {
    return this.employerForm.get('userName');
  }
  get primaryEmail() {
    return this.employerForm.get('primaryEmail');
  }

  onSubmit(employerForm) {
    let data = employerForm.value;
    data.firstName = localStorage.firstName;
    // this.service.postRegisterData(data).subscribe(response => {
    //   console.log(response);
    //   let m = response.json();
    //   if (m.status == true) {
    //     this.result="registration successful";
    //     this.routes.navigate(['/login']);
    //   }


    // })
    console.log(data);
  }

  constructor(private service: register) { }
  employerbasic(): void {
    console.log(this.data);
   
      this.service.basicDetails(this.data);
        // .subscribe(result => {
        //   this.responseData = result
        //   console.log(this.responseData)
        //   console.log(this.responseData.userName);
        // }
        // )
  }
  ngOnInit() {
  }

}
