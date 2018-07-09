import { users } from './../models/home';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
users:Array<object>;
  constructor() { 
    this.users=users;
  }

  ngOnInit() {
  }

}
