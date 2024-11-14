import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone:true
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
