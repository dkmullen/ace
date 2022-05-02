import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-singing22-vids',
  templateUrl: './singing22-vids.component.html',
  styleUrls: ['./singing22-vids.component.scss'],
})
export class Singing22VidsComponent implements OnInit {
  videoArray = [];
  constructor(protected dialog: MatDialog) {}

  ngOnInit() {
    this.shuffleArray([
      { name: 'Mary Claire Carter', id: 'mary' },
      { name: 'Macy Shoemaker', id: 'macy' },
      { name: 'Irelan Fender ', id: 'irelan' },
      { name: 'Joey Nieman', id: 'joey' },
      { name: 'Abigail Seaman', id: 'abigail' },
      { name: 'Jasmyne Simpkins', id: 'jasmyne' },
      { name: 'Avery Arwood', id: 'avery' },
      { name: 'Sherleen Mwaura ', id: 'sherleen' },
      { name: 'Sophia Newton', id: 'sophia' },
      { name: 'Presley Ford', id: 'presley' },
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
    elem.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
