import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.css']
})
export class VerticalMenuComponent implements OnInit {

  expandHeight = '42px';
  collapseHeight = '42px';

  constructor() { }

  ngOnInit() {
  }

}
