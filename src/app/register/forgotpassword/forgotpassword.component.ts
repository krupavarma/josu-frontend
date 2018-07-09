import { forgotPassword } from './forgotpassword.service';
import { Register } from './../info';

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
  providers: [forgotPassword]
})
export class ForgotpasswordComponent implements OnInit {
  data: any = {};
  responseData: any;
  position = 'below';
  forgotPasswordForm = new FormGroup({

    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(30),


    ])
  })

  get emailFormControl() {
    return this.forgotPasswordForm.get('emailFormControl');
  }


  onSubmit(forgotPasswordForm) {
    let data = forgotPasswordForm.value;
    console.log(data);
  }
  message: any;
  constructor(public snackBar: MatSnackBar, private service: forgotPassword) {
    this.message = "Link Has Been Sent To Your Mail..";
  }

  openSnackBar() {
    this.snackBar.open(this.message, "check it", { duration: 1000 }
    );
  }
  errorMessage: any;
  sendrequest() {
    console.log(this.data);
    this.service.forgotPassword(this.data)
      .subscribe(result => {
        this.responseData = result
        console.log(this.responseData)
        let m = this.responseData;
        this.errorMessage = m.message;
      })
  }
  ngOnInit() {
  }

}
