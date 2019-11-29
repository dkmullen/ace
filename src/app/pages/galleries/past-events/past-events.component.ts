import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-events',
  templateUrl: './past-events.component.html',
  styleUrls: ['./past-events.component.scss']
})
export class PastEventsComponent implements OnInit {
  pics = [];
  picsCol2 = [];
  picsCol3 = [];
  names = [
    'Nesma Abdelnabi',
    'Sydni Stinnett',
    'Maddie McKellar',
    'Caris Morgenegg',
    'Presley Keith',
    'Matthew Cleveland',
    'Jasmyne Simpkins'
  ];

  names2 = [
    'Katelyn Hedrick',
    'Hannah Sloas',
    'Ja Thomas',
    'Christina Ledbetter',
    'Marlee Arden',
    'Cece Coakley'
  ];

  names3 = [
    'Mary Claire Carter',
    'Heather Bohan',
    'Connor Kelly',
    'Tory Beth Sullivan',
    'Brooklyn Johnson',
    'Ella Pinchok',
    'Shelton Tyson',
    'Jasmyne Baker'
  ];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 7; i++) {
      this.pics.push('g' + i);
    }
    for (let i = 8; i <= 13; i++) {
      this.picsCol2.push('g' + i);
    }
    for (let i = 14; i <= 21; i++) {
      this.picsCol3.push('g' + i);
    }
  }

}
