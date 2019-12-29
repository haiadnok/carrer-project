import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor() { }
image : string = 'assets/download.png';
imagepath :string ='assets/career.jpg';
  ngOnInit() {
  }

}
