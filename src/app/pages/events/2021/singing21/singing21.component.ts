import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-singing21',
  templateUrl: './singing21.component.html',
  styleUrls: ['./singing21.component.scss']
})
export class Singing21Component implements OnInit {
  videoArray = [];
  constructor(protected dialog: MatDialog) { }

  ngOnInit() {
    this.shuffleArray([
      {name: 'Mary Claire Carter', id: 'mary'},
      {name: 'Maddy Dishner', id: 'maddy'},
      {name: 'Hannah Johnson', id: 'hannah'},
      {name: 'Joey Nieman', id: 'joey'},
      {name: 'Ella Pinchok', id: 'ella'},
      {name: 'Jasmyne Simpkins', id: 'jasmyne'},
      {name: 'Phillip Taylor', id: 'phillip'},
      {name: 'Emily Caroline Thomas', id: 'emily'},
      {name: 'Sophia Newton', id: 'sophia'},
      {name: 'Brady Pinchok', id: 'brady'},

    ]);
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.videoArray = array;

  }

  scrollToElement(element): void {
    const elem = document.getElementById(element);
    console.log(element);
    elem.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
