import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shakepeare',
  templateUrl: './shakepeare.component.html',
  styleUrls: ['../saferathome.scss']
})
export class ShakepeareComponent implements OnInit {
  videoArray = [];
  constructor() { }

  ngOnInit() {
    this.shuffleArray([
      {name: 'Bella Patterson', id: 'bella'},
      {name: 'Brycen Ritchie', id: 'brycen'},
      {name: 'Meredith Bishop', id: 'meredith'},
      {name: 'Heather Bohan', id: 'heather'},
      {name: 'Marian Vacaliuc', id: 'marian'},
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
