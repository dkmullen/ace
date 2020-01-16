import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singing2020',
  templateUrl: './singing2020.component.html',
  styleUrls: ['./singing2020.component.scss']
})
export class Singing2020Component implements OnInit {

  pics = [];
  picsCol2 = [];

  constructor() { }

  ngOnInit() {
    for (let i = 2; i <= 26; i += 2 ) {
      this.pics.push('s' + i);
    }
    for (let i = 28; i <= 52; i += 2) {
      this.picsCol2.push('s' + i);
    }
  }

}
