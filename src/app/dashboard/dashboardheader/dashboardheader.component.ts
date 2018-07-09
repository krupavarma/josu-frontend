import { approute } from './../../app.router';
import { images, employerDashboardNavpills } from './../../models/home';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardheader',
  templateUrl: './dashboardheader.component.html',
  styleUrls: ['./dashboardheader.component.scss']
})
export class DashboardheaderComponent implements OnInit {
  position = localStorage.positionFormControl;
  firstName = localStorage.firstNameFormControl;

  images: Array<any>;
  
  constructor(private routes: Router) {
    this.images = images;
   
  }
  navigate() {
    this.routes.navigate(["/home"])
  }

  ngOnInit() {
  }

}
