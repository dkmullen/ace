import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-instrumental-contest',
  templateUrl: './instrumental-contest.component.html',
  styleUrls: ['./instrumental-contest.component.scss']
})
export class InstrumentalContestComponent implements OnInit {
  videoArray = [];
  constructor(protected dialog: MatDialog) { }

  ngOnInit() {
    this.shuffleArray([
      {name: 'Catelyn Woody', id: 'catelyn'},
      {name: 'Geoffrey Helveston', id: 'geoffrey'},
      {name: 'Joseph Blair', id: 'joseph'},
      {name: 'Joey Nieman', id: 'joey'},
      {name: 'Max Harper', id: 'max'},
      {name: 'Marian Vacaliuc', id: 'marian'},
      {name: 'Abigail Kelley', id: 'abigail'},
      {name: 'Addie Peterson', id: 'addie'},
      {name: 'Jackson Frazier', id: 'jackson'}
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
