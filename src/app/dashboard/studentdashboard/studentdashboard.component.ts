import { studentDashboardNavpills } from './../../models/home';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.scss']
})
export class StudentdashboardComponent implements OnInit {

  navpills: Array<object>;
  selectedItem: String;
  pageName: string;
  studentDashboardNavpills: Array<object>;

  constructor() { 
    this.selectedItem = 'EMPLOYERS LIST';
    this.pageName='EMPLOYERS LIST';
    this.studentDashboardNavpills = studentDashboardNavpills;

    
  }
  listClick(event, newValue) {
        console.log(newValue.name);
        this.selectedItem = newValue.name;
        this.pageName = newValue.name;
      }
  ngOnInit() {
  }

}
