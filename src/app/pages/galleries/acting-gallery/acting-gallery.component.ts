import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acting-gallery',
  templateUrl: './acting-gallery.component.html',
  styleUrls: ['./acting-gallery.component.scss']
})
export class ActingGalleryComponent implements OnInit {
  pics = [];
  picsCol2 = [];
  picsCol3 = [];

  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 15; i++) {
      this.pics.push('a' + i);
    }
    for (let i = 16; i <= 30; i++) {
      this.picsCol2.push('a' + i);
    }
    for (let i = 31; i <= 44; i++) {
      this.picsCol3.push('a' + i);
    }
  }

}
