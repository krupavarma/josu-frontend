import { Register } from './../register/info';
import { login } from './login.service';

import { approute } from './../app.router';
import { Router } from '@angular/router';
import { navpills } from './../models/home';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [login]
})
export class LoginComponent implements OnInit {
  errorMessage;
  responseData: any;
  data: any = {
  };

  loginForm = new FormGroup({
    emailFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)]),
    // Validators.pattern(EMAIL_REGEX)
    passwordFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20)
    ])
  })
  get passwordFormControl() {
    return this.loginForm.get('passwordFormControl');
  }
  get emailFormControl() {
    return this.loginForm.get('emailFormControl');
  }
  constructor(private service: login, private routes: Router) {
  }


  gotoDashboard(): void {
    console.log(this.data);
    this.service.login(this.data)
      .subscribe(result => {
        this.responseData = result
        console.log(this.responseData)
        let m = this.responseData;
        this.errorMessage = m.message;
        if (this.responseData.message.typeId === "UT1") {
          this.routes.navigate(['/student']);
        }
        else if (this.responseData.message.typeId === "UT2") {
          this.routes.navigate(['/college']);
        }
        else if (this.responseData.message.typeId === "UT3") {
          this.routes.navigate(['/employer']);
        }
        else if (this.responseData.message.typeId === "UT4") {
          this.routes.navigate(['/admin']);
        }
        else {
          this.responseData == "error";
          console.log(this.responseData);
          //  this.routes.navigate(['/login']);
        }
      }

      )
  }

  ngOnInit(): void {
    //  this.gotoDashboard(form);
  }

}
