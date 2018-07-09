import { Component, OnInit } from '@angular/core';
import { navpills,collegeDashboardNavpills } from './../../models/home';

@Component({
  selector: 'app-collegedashboard',
  templateUrl: './collegedashboard.component.html',
  styleUrls: ['./collegedashboard.component.scss']
})
export class CollegedashboardComponent implements OnInit {

  selectedItem: String;
  collegeDashboardNavpills: Array<object>;
  pageName: string;
  constructor() { 
    this.selectedItem = 'STUDENTS LIST';
    this.pageName='STUDENTS LIST';
    this.collegeDashboardNavpills = collegeDashboardNavpills;
  }
  listClick(event, newValue) {
    
        console.log(newValue.name);
        this.selectedItem = newValue.name;
        this.pageName = newValue.name;
      
    
      }

  ngOnInit() {
  }

}
