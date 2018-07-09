import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule, FormArray } from '@angular/forms';
@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.scss']
})
export class SetpasswordComponent implements OnInit {
setPasswordForm = new FormGroup({


  passwordFormControl :  new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(20)
  ]),

  confirmPasswordFormControl : new FormControl('', [
    Validators.required,
  ])
   })
 get passwordFormControl() {
    return this.setPasswordForm.get('passwordFormControl');
  }
  get confirmPasswordFormControl() {
    return this.setPasswordForm.get('confirmPasswordFormControl');
  }
 

    onSubmit(setPasswordForm) {
    let data = setPasswordForm.value;
   console.log(data);
   
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
  constructor() { }

  ngOnInit() {
  }

}
