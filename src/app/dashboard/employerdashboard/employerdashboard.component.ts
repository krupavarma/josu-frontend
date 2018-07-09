import { employerDashboardNavpills } from './../../models/home';



import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employerdashboard',
  templateUrl: './employerdashboard.component.html',
  styleUrls: ['./employerdashboard.component.scss']
})
export class EmployerdashboardComponent implements OnInit {
  employerDashboardNavpills: Array<object>;
  selectedItem: String;
  pageName: string;
  constructor(){
 this.employerDashboardNavpills = employerDashboardNavpills;
    this.selectedItem = 'APPLICATIONS';
    this.pageName = 'APPLICATIONS';
  }
  ngOnInit(){

  }

  listClick(event, newValue) {

    console.log(newValue.name);
    this.selectedItem = newValue.name;
    this.pageName = newValue.name;

  }
}
