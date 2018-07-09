import { Component, OnInit } from '@angular/core';
import { images, footer, sections } from './../models/home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: Array<object>;
  sections: Array<object>;
  constructor() {
    this.images = images;
    this.sections = sections;
  }

  ngOnInit() {
  }

}
