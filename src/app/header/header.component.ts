import { Component, OnInit } from '@angular/core';
import { images} from './../models/home';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  images: Array<any>;
  constructor() { 
    this.images = images;
  }

  ngOnInit() {
  }

}
