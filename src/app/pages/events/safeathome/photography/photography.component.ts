import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['../saferathome.scss']
})
export class PhotographyComponent implements OnInit {
  picArray = [];

  constructor() { }

  ngOnInit() {
    this.shuffleArray([
      {name: 'Leah Kahre', id: 'leah'},
      {name: 'Sydney Feistner', id: 'sydney'},
      {name: 'Ella Pinchok', id: 'ella'},
      {name: 'Isabella Murrell', id: 'isabella'},
      {name: 'Elizabeth Newman', id: 'elizabeth'}
    ]);
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.picArray = array;

  }

  scrollToElement(element): void {
    const elem = document.getElementById(element);
    console.log(element);
    elem.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
