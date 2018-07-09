import { navpills } from './../models/home';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

 
  navpills: Array<object>;
  selectedItem: String;
  pageName: string;
  constructor() {
  
    this.selectedItem = 'Login';
    this.pageName='Login';
    this.navpills = navpills;
    
  }

  listClick(event, newValue) {

    console.log(newValue.name);
    this.selectedItem = newValue.name;
    this.pageName = newValue.name;

  }

  ngOnInit() {
  }

}
