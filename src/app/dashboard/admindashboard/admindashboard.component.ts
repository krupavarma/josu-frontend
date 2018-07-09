import { adminDashboardNavpills } from './../../models/home';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {
  adminDashboardNavpills: Array<object>;
  selectedItem: String;
  pageName: string;
  constructor() {
    this.adminDashboardNavpills = adminDashboardNavpills;
    this.selectedItem = 'APPLICATIONS';
    this.pageName = 'APPLICATIONS';
  }

  ngOnInit() {
  }

  listClick(event, newValue) {

    console.log(newValue.name);
    this.selectedItem = newValue.name;
    this.pageName = newValue.name;

  }
}
