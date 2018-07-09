import { Component, OnInit } from '@angular/core';
import { images, footer, sections } from './../models/home';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footer: Array<object>;
  constructor() {
    this.footer = footer;
   }
  ngOnInit() {
  }

}
