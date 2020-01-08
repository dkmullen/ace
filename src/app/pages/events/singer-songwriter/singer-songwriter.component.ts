import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Post } from './singer-songwriter.model';

@Component({
  selector: 'app-singer-songwriter',
  templateUrl: './singer-songwriter.component.html',
  styleUrls: ['./singer-songwriter.component.scss']
})
export class SingerSongwriterComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    this.shuffleArray([1, 2, 3, 4]);
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array)
  }


}
