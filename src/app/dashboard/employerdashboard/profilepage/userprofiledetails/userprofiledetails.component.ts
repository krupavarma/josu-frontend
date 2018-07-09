import { profilePageTabs } from './../../../../models/home';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofiledetails',
  templateUrl: './userprofiledetails.component.html',
  styleUrls: ['./userprofiledetails.component.scss']
})
export class UserprofiledetailsComponent implements OnInit {
profilePageTabs:Array<object>;
  constructor() {
    this.profilePageTabs=profilePageTabs;
   }

  ngOnInit() {
  }

}